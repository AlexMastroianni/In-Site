const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    company: String
    trade: String
    sites: [Site]
    notes: [Note]
  }

  type Site {
    _id: ID
    name: String
    lat: Number
    long: Number
    classifcation: String
    category: String
    users: [User]
    notes: [Note]
  }
  type Post {
    id: ID
    author: [User]
    content: String
    comments: [Comment]
  }

  type Query {
    users: [User]
    sites: [Site]
    user: User
    notes: [Note]
    note: Note
    comments: [Comment]
    site(_id: ID!): Site
  }
  type Auth {
    token: ID
    user: User
  }
  input noteInput {
    author: [User]
    content: String
  }
  input commentInput {
    note: [notes]
    author: [User]
    content: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth

    createNote(note: noteInput): Note
    updateNote(id: String, note: noteInput): Note
    deleteNote(id: String): String

    createComment(note: commentInput): Note
    updateComment(id: String, comment: commentInput): Note
    deleteComment(id: String): String
  }
`;

module.exports = typeDefs;
