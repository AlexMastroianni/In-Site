const { AuthenticationError } = require('apollo-server-express');
const { User, Site, Note, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },

    sites: async () => {
      return await Site.find();
    },

    notes: async () => {
      return await Note.find();
    },

    comments: async () => {
      return await Comment.find();
    },

    user: async (parent, args, context) => {
      console.log('context', context.user);
      if (context.user) {
        const user = await User.findById({ _id: context.user._id });
        //   .populate({
        //     path: 'site.notes',
        //     populate: 'site',
        //   });

        return user;
      }
    },

    site: async (parent, { ID }) => {
      return await Site.findById({ ID });
    },
    note: async (parent, { ID }) => {
      return await Note.findById({ ID });
    },
    comment: async (parent, { ID }) => {
      return await Note.findById({ ID });
    },
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
        throw new AuthenticationError('Incorrect Email');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);

      return { token, user };
    },

    addNote: async (parent, { noteInput: { author, content } }, context) => {
      const createNote = new Note({
        author: author,
        content: content,
        createdAt: new Date().toISOString(),
      });
      const res = await createNote.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    addComment: async (
      parent,
      { commentInput: { author, content } },
      context
    ) => {
      const createComment = new Comment({
        author: author,
        content: content,
        createdAt: new Date().toISOString(),
      });
      const res = await createComment.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    deleteNote: async (parent, { ID }, context) => {
      const noteWasDeleted = (await Note.deleteOne({ _id: ID })).deletedCount;
      return noteWasDeleted;
    },

    deleteComment: async (parent, { ID }, context) => {
      const commentWasDeleted = (await Note.deleteOne({ _id: ID }))
        .deletedCount;
      return commentWasDeleted;
    },

    editNote: async (parent, { ID, noteInput: { author, content } }) => {
      const noteWasEdited = (
        await Note.updateOne({ _id: ID }, { author: author, content: content })
      ).modifiedCount;
      return noteWasEdited;
    },
    editComment: async (parent, { ID, commentInput: { author, content } }) => {
      const commentWasEdited = (
        await Comment.updateOne(
          { _id: ID },
          { author: author, content: content }
        )
      ).modifiedCount;
      return commentWasEdited;
    },
  },
};

module.exports = resolvers;
