import React from 'react';

function Sites(props) {
  return (
    <div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Welcome *Add Username*</p>
          <br></br>
          <p class="subtitle">
            You have *NumberOfCurrentSites* active, Smash it out
          </p>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </article>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Sites</p>
            <p class="subtitle">Map lists of sites here</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Workload</p>

            <div class="content">
              <p>Some infographic</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Sites;
