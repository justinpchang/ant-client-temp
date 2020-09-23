import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>This is the home page.</p>
      <Link to="/profile">Profile</Link>
      {'  '}
      <Link to="/project-search">Project Search</Link>
      <Link to="/messaging">Messaging</Link>
      {'  '}
      <Link to="/user-onboarding">User Onboarding</Link>
    </>
  );
}

export default Home;