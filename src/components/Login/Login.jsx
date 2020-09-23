import React from 'react';

import Navbar from './LoginNavbar';
import {
  Container,
  Content,
  Header,
  LoginBox,
  Divider,
  LoginBoxContent,
  LoginInput,
  TinyText,
  LoginButton,
} from './Login.styles';

function Login(props) {
  return (
    <Container>
      <Navbar />
      <Content>
        <Header bold>Welcome to Ant!</Header>
        <Header>Curating talent across the globe</Header>
        <LoginBox>
          <Divider></Divider>
          <LoginBoxContent left>
            <LoginInput placeholder="Email" />
            <br />
            <LoginInput placeholder="Password" />
            <br />
            <TinyText>Forgot password?</TinyText>
            <LoginButton>Login</LoginButton>
          </LoginBoxContent>
          <LoginBoxContent right>
            Right side
          </LoginBoxContent>
        </LoginBox>
      </Content>
    </Container>
  )
}

export default Login;