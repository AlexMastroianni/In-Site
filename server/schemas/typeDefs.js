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
    lat: Number
    Long: Number
    classifcation: String
    catorgery: String
    users: [User]
  }

  type Note {
    _id: ID
    author: User
    content: String
    site: Site
    date: Date
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
  }
`;

module.exports = typeDefs;
