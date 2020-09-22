import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>This is the home page.</p>
      <Link to="/profile">Profile</Link>
      {'  '}
      <Link to="/project_search">Project Search</Link>
    </>
  );
}

export default Home;