import React from 'react';

function Sites(props) {
  return (
    <div className="sites">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Sites</p>
            <p class="subtitle">*add site name*</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Trades</p>

            <div class="content">
              <p>*display sites linked to site*</p>
            </div>
          </article>
        </div>
      </div>
      <div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">On the Agenda</p>
            <br></br>
            <p class="subtitle">Here is what happening</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </article>
        </div>
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
                  <button class="button is-link">Save changes</button>
                </p>
                <p class="control">
                  <button class="button">Cancel</button>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Sites;
