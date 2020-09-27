import React from 'react';

import history from '../../history';
import logo from '../../images/ANT_Logo_White.svg';
import {
  Background,
  MainContainer,
  Column,
  Logo,
  Tagline,
  BottomText,
  Link,
  InputText,
  Input,
  Button,
  Divider,
} from './Login.styles';

function Login(props) {
  return (
    <Background>
      <MainContainer>
        <Column> 
          <Logo src={logo} />
          <Tagline>Curating talent across the globe.</Tagline>
          <BottomText>New to ANT? <Link onClick={(e) => history.push("/signup")}>SIGN UP</Link></BottomText>
        </Column>
        <Column right>
          <InputText first>Email</InputText>
          <Input />
          <InputText>Password</InputText>
          <Input type="password" placeholder="6+ characters" />
          <InputText>Forgot password? <Link>RESET</Link></InputText>
          <Button>SIGN IN</Button>
          <Divider />
          <InputText>Google | Facebook</InputText>
        </Column>
      </MainContainer>
    </Background>
  )
}

export default Login;