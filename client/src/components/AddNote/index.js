import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';
import { useState } from 'react';

function AddNote() {
  const [createPost, { err }] = useMutation(CREATE_POST);
  const [content, setContent] = useState(null);

  const addPost = () => {
    createPost({
      variables: {
        content: content,
      },
    });
  };

  return (
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Whats Next?</p>
        <br></br>
        <p class="subtitle">Put the next job in here!</p>
        <div>
          <div class="content">
            <input
              className="input"
              onChange={(e) => setContent(e.target.value)}
            />
            <div class="field is-grouped p-4">
              <p class="control">
                <button class="button is-link" onClick={() => addPost()}>
                  Add Post
                </button>
              </p>
              <p class="control">
                <button class="button">Cancel</button>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AddNote;
