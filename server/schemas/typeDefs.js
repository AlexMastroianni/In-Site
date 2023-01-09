const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    company: String
    trade: String
    sites: Site
  }

  type Site {
    _id: ID
    location: [Number]
    classifcation: String
    catorgery: String
    users: User
  }

  type Note {
    _id: ID
    auther: User
    content: String
    sites: Site
    date: Date
  }

  type Comments {
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
