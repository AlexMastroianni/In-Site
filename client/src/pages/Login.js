import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../helper/superBase';

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      console.log(data);
      navigate('/');
      setToken(data);
      //   alert('Check your email for verification link')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="login-page">
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="tile is-ancestor is-flex">
            <div className="tile is-parent pt-5 mt-5">
              <article className="tile is-child box is-justify-content-center">
                <p className="title">Login</p>
                <p className="subtitle">Login to your account</p>

                <div className="content">
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label htmlFor="email">Email:</label>
                      <input
                        placeholder=""
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="pwd">Password:</label>
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
                <Link to="/signup">← Go to Signup</Link>
              </article>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default Login;
