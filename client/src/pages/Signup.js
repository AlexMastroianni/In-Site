import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Logo from '../assets/in-site.png';

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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="login">
      <div className="card">
        <div className="loginPage">
          <img src={Logo} alt="HeroImg" />
          <Link to="/login">← Go to Login</Link>

          <h2>Signup</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label htmlFor="username">User Name</label>
              <input
                placeholder="username"
                name="username"
                type="username"
                id="username"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="pwd">Password</label>
              <input
                placeholder="******"
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
      </div>
    </section>
  );
}

export default Signup;
