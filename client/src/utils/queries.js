import { gql, useQuery } from '@apollo/client';

export const QUERY_SITES = gql`
  query sites {
    sites {
      _id
      classifcation
      category
      name
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query users {
    users {
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
  }
`;

export const GET_NOTES = gql`
  query notes {
    notes {
      _id

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
