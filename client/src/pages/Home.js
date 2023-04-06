import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';
import Login from './Login';
import { supabase } from '../helper/superBase';

const Home = ({ token }) => {
  const [profile, setProfile] = useState([]);

  async function insertProfile() {
    try {
      const { data: profile, error } = await supabase.from('profiles').upsert(
        {
          user_id: token.user.id,
          full_name: token.user.user_metadata.username,
        },
        { uniqueColumns: ['user_id'] }
      );

      setProfile(profile);
      console.log('New profile inserted successfully!');
    } catch (error) {
      console.error(error);
      if (error === 409) {
        console.log(error, 'conflict 409');
      } else {
        return;
      }
    }
  }

  useEffect(() => {
    insertProfile();
  }, []);

  if (token) {
    return (
      <>
        <SideBar />
        <Dashboard token={token} />
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
};

export default Home;
