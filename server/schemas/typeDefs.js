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
    long: Float
    classifcation: String
    category: String
    users: [User]
  }
  type Note {
    _id: ID
    author: User
    content: String
    comments: [Comment]
    createdAt: String
  }
  type Comment {
    _id: ID
    content: String
    author: User
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }
  input NoteInput {
    author: String
    content: String
  }
  input CommentInput {
    author: String
    content: String
  }

  input SiteInput {
    name: String
    lat: Int
    long: Int
    classifcation: String
    category: String
  }

    type Query {
    users: [User]
    sites: [Site]
    notes: [Note]
    user: User
    comments: [Comment]
    userID:(ID:ID!): User
    site:(ID:ID!): Site
    comment:(ID:ID!): Comment
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth!
    login(email: String!, password: String!): Auth

    addNote(noteInput:NoteInput): Note!
    deleteNote(ID:ID!):Boolean
    editNote(ID:ID, noteInput:NoteInput): Boolean


    addComment(commentInput:CommentInput): Comment!
    deleteComment(ID:ID!):Boolean

  }
`;

module.exports = typeDefs;
