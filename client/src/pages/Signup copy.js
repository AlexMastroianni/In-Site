import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log(formState.email, formState.password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-page">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <div class="tile is-ancestor is-flex">
            <div class="tile is-parent pt-5 mt-5">
              <article class="tile is-child box is-justify-content-center">
                <p class="title">Sign Up</p>
                <p class="subtitle">Create a new account</p>
                <div class="content">
                  <form onSubmit={handleFormSubmit}>
                    <div className="field">
                      <label htmlFor="username">User Name</label>
                      <input
                        placeholder=""
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input
                        placeholder=""
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="pwd">Password</label>
                      <input
                        placeholder=""
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-link" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <Link to="/login">← Go to Login</Link>{' '}
              </article>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  );
}

export default Signup;
