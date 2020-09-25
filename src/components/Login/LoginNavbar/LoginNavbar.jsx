import React from 'react';

import logo from '../../../images/ANT_Logo_White.svg';
import {
  Background,
  Logo
} from './LoginNavbar.styles';

function LoginNavbar(props) {
  return (
    <Background>
      <Logo src={logo} />
    </Background>
  );
}

export default LoginNavbar;