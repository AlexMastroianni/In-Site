import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../utils/mutations';
import { useState } from 'react';

function AddNote() {
  const [createNote, { err }] = useMutation(ADD_NOTE);
  const [content, setContent] = useState(null);

  const addNote = (e) => {
    console.log(e.target.value);
    createNote({
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
                <button class="button is-link" onClick={() => addNote()}>
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
