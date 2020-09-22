import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <p>This is the profile page.</p>
      <Link to="/home">Home</Link>
    </>
  )
}

export default Profile;