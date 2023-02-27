const { AuthenticationError } = require('apollo-server-express');
const { User, Site, Note, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('sites');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('sites');
    },
    sites: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Site.find(params).sort({ createdAt: -1 });
    },
    site: async (parent, { siteID }) => {
      return Site.findOne({ _id: siteID });
    },
    note: async (parent, { siteID }) => {
      const params = siteID ? { siteID } : {};
      return Site.find(params).sort({ createdAt: -1 });
    },
    notes: async (parent, { siteID }) => {
      return Site.findOne({ _id: siteID });
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('sites');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addNote: async (parent, { noteInput }, context) => {
      if (context.user) {
        const note = await note.create({
          noteInput,
          author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { notes: note.id } }
        );

        return note;
      }
    },
    addComment: async (parent, { noteId, commentInput }, context) => {
      if (context.user) {
        return Note.findOneAndUpdate(
          { _id: noteId },
          {
            $addToSet: {
              comments: { commentInput, author: context.user.username },
            },
          },
          {
            new: true,
          }
        );
      }
    },
    deleteNote: async (parent, { noteId }, context) => {
      if (context.user) {
        const note = await Note.findOneAndDelete({
          _id: noteId,
          author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { notes: note._id } }
        );

        return note;
      }
    },
    deleteComment: async (parent, { noteId, commentId }, context) => {
      if (context.user) {
        return Note.findOneAndUpdate(
          { _id: noteId },
          {
            $pull: {
              comments: {
                _id: commentId,
                author: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
    },
    addSite: async (parent, { siteInput }, context) => {
      if (context.user) {
        const site = await site.create({
          siteInput,
          author: context.user.username,
        });

        await Site.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { site: site.id } }
        );

        return site;
      }
    },
    deleteSite: async (parent, { siteId }, context) => {
      if (context.user) {
        return Site.findOneAndUpdate(
          { _id: siteId },
          {
            $pull: {
              sites: {
                _id: siteId,
              },
            },
          },
          { new: true }
        );
      }
    },
  },
};

module.exports = resolvers;
