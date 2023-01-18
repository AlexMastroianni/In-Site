import { gql } from '@apollo/client';

export const QUERY_NOTE = gql`
  query getNote($site: ID) {
    notes(Site: $site) {
      _id
      author
      content
    }
  }
`;

export const QUERY_ALL_NOTES = gql`
  query notes {
    notes {
      _id
      author
      content
    }
  }
`;

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
    sites {
      name
      category
    }
    users {
      username
      company
      trade
    }
    notes {
      author
      content
    }
  }
`;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;
