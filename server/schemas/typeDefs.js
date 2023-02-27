const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    company: String
    trade: String
  }

  type Site {
    _id: ID
    name: String
    lat: Int
    long: Int
    classifcation: String
    category: String
  }
  type Note {
    _id: ID
    author: User
    content: String
    comments: Comment
    createdAt: String
  }
  type Comment {
    _id: ID
    content: String
    author: String
    createdAt: String
  }

  type Query {
    users: [User]
    sites: [Site]
    notes: [Note]
    comments: [Comment]
    site(_id: ID!): [Site]
    note(username: String): [Note]
    user(username: String): [User]
  }
  type Auth {
    token: ID
    user: User
  }
  input noteInput {
    author: String
    content: String
  }
  input commentInput {
    author: String
    content: String
  }

  input siteInput {
    name: String
    lat: Int
    long: Int
    classifcation: String
    category: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth

    addNote(note: noteInput): Note
    updateNote(id: String, note: noteInput): Note
    deleteNote(id: String): String

    addComment(note: commentInput): Note
    updateComment(id: String, comment: commentInput): Note
    deleteComment(id: String): String

    addSite(note: siteInput): Site
    updateSite(id: String, note: siteInput): Site
    deleteSite(id: String): String
  }
`;

module.exports = typeDefs;
