import { gql } from '@apollo/client';

export const QUERY_ALL_SITES = gql`
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
  query usersALL {
    user {
      username
      company
      trade
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      company
      trade
    }
    sites {
      name
      category
    }
    users {
      username
      company
      trade
    }
    getAll {
      id
      author
      content
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
