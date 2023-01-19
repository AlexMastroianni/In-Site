const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    company: String
    trade: String
    sites: [Site]
  }

  type Site {
    _id: ID
    name: String
    lat: Float
    Long: Float
    classifcation: String
    category: String
    users: [User]
  }
  type Post {
    id: ID
    author: String
    content: String
  }

  type Query {
    users: [User]
    sites: [Site]
    user: User
    getAll: [Post]
  }
  type Auth {
    token: ID
    user: User
  }
  input PostInput {
    author: String
    content: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(username: String!, email: String!, password: String!): User

    login(email: String!, password: String!): Auth

    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): String
  }
`;

module.exports = typeDefs;
