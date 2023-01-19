import React from 'react';

function AddNote() {
  return (
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Whats Next?</p>
        <br></br>
        <p class="subtitle">Put the next job in here!</p>
        <div class="content">
          <input
            class="input is-rounded "
            type="text"
            placeholder="Rounded input"
          ></input>
          <div class="field is-grouped p-4">
            <p class="control">
              <button class="button is-link">Add Note</button>
            </p>
            <p class="control">
              <button class="button">Cancel</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AddNote;
