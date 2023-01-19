import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($author: String, $content: String) {
    createPost(post: { author: $author, content: $content }) {
      id
      author
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String) {
    deletePost(id: $id)
  }
`;
