import React from 'react';
import { Link } from 'react-router-dom';

const Messaging = () => {

    return (
        <>
            <p>This is the Messaging page.</p>
            <Link to="/home">Home</Link>
            {'  '}
            <Link to="/profile">Profile</Link>
        </>
    );
};

export default Messaging;