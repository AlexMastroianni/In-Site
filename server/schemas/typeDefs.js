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
    author: User
    content: String
    site: Site
    date: String
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
  }
  type Auth {
    token: ID
    user: User
  }
  type Mutation {
    # addUser(
    #   firstName: String!
    #   lastName: String!
    #   email: String!
    #   password: String!
    # ): Auth
    # addOrder(products: [ID]!): Order
    # updateUser(
    #   firstName: String
    #   lastName: String
    #   email: String
    #   password: String
    # ): User
    # updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
