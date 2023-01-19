const { AuthenticationError } = require('apollo-server-express');
const { User, Site, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
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

      // throw new AuthenticationError('Not logged in');
    },
    sites: async () => {
      return await Site.find();
    },
    getAll: async () => {
      return await Post.find();
    },

    users: async () => {
      return await User.find();
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
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    createPost: async (parent, args, context, info) => {
      const { author, content } = args.post;
      const post = await new Post({ author, content }).save();
      return post;
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { author, content } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { author, content },
        { new: true }
      );
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return 'Deleted';
    },
  },
};

module.exports = resolvers;
