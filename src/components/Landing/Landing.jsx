import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <>
          <p>This is the Landing page.</p>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </>
    );
};

export default Landing;