import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sites from './pages/Sites';
import * as dotenv from 'dotenv';
import SinlgeSite from './components/Sites/singleSite';

dotenv.config();

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          {token ? <Route path={'/'} element={<Home token={token} />} /> : ''}
          <Route path="*" element={<NoMatch />} />
          <Route path="/sites" element={<Sites token={token} />} />
          <Route path="/sites/:id" element={<SinlgeSite />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
