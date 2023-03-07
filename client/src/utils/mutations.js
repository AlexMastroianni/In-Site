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

export const ADD_NOTE = gql`
  mutation addNote($author: String, $content: String) {
    addNote(notes: { author: $author, content: $content }) {
      _id

      content
      createdAt
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($noteId: ID!, $commentInput: String!) {
    addComment(noteId: $noteId, commentInput: $commentInput) {
      _id
      content
      author
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: String) {
    deletePost(id: $id)
  }
`;
