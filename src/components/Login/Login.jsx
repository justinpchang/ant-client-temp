import React from 'react';

import Navbar from './LoginNavbar';
import {
  Content,
} from './Login.styles';

function Login(props) {
  return (
    <>
      <Navbar />
      <Content>
        <p>This is the login page.</p>
      </Content>
    </>
  )
}

export default Login;