import { gql } from '@apollo/client';

export const QUERY_SITES = gql`
  query sites {
    sites {
      _id
      lat
      long
      classifcation
      category
      name
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query users {
    user {
      username
      company
      trade
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      sites {
        _id
        name
        lat
        long
        classifcation
        category
      }
      notes {
        _id
        content
        author
      }
    }
  }
`;

export const GET_NOTES = gql`
  query notes {
    notes {
      id
      author
      content
    }
  }
`;

export const QUERY_SINGLE_SITE = gql`
  query getSingleSite($siteId: ID!) {
    site(siteId: $siteId) {
      _id
      name
      lat
      long
      classifcation
      category
      users {
        _id
        username
        company
        trade
      }
      notes {
        _id
        author
        contents
        comments
        createdAt
      }
    }
  }
`;
