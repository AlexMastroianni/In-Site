import { gql } from '@apollo/client';

export const QUERY_NOTE = gql`
  query getNote($site: ID) {
    notes(Site: $site) {
      _id
      author
      content
      site
      date
      site {
        _id
      }
    }
  }
`;

export const QUERY_ALL_SITES = gql`
  {
    sites {
      _id
      lat
      long
      classifcation
      category
      User {
        username
        company
        trade
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    users {
      username
      company
      trade
      sites
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
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
      # site {
      #   _id
      #   name
      #   category
      #   classifcation
      #   note {
      #     _id
      #     author
      #     content
      #   }
      # }
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
