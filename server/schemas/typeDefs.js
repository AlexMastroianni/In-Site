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

  type Note {
    _id: ID
    author: String
    content: String
  }

  type Post {
    id: ID
    title: String
    description: String
  }

  type Comment {
    _id: ID
    notes: Note
    conent: String
  }
  type Query {
    users: [User]
    sites: [Site]
    notes: [Note]
    user: User
    getAll: [Post]
  }
  type Auth {
    token: ID
    user: User
  }
  input NoteInput {
    author: String
    content: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(username: String!, email: String!, password: String!): User

    login(email: String!, password: String!): Auth

    createNote(Note: NoteInput): Note
    updateNote(id: String, Note: NoteInput): Note
    deleteNote(id: String): String
  }
`;

module.exports = typeDefs;
