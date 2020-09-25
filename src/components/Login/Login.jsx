import React from 'react';

import facebook from '../../images/facebook_login.png';
import google from '../../images/google_login.png';
import Navbar from './LoginNavbar';
import {
  Spacer,
  Container,
  Content,
  Header,
  LoginBox,
  Divider,
  LoginBoxContent,
  LoginInput,
  ExternalLogin,
  ExternalLoginText,
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
            <Spacer height={50} />
            <LoginInput placeholder="Email" />
            <Spacer height={15} />
            <LoginInput placeholder="Password" />
            <TinyText>Forgot password?</TinyText>
            <LoginButton>Log In</LoginButton>
            <TinyText out>Don't have an account? Sign up</TinyText>
          </LoginBoxContent>
          <LoginBoxContent right>
            <Spacer height={50} />
            <ExternalLogin>
              <img src={facebook} style={{width: "35px", height: "30px"}} />
              <ExternalLoginText>Login with Facebook</ExternalLoginText>
            </ExternalLogin>
            <Spacer height={15} />
            <ExternalLogin>
              <img src={google} style={{marginLeft: "5px", width: "25px", height: "30px"}} />
              <ExternalLoginText>Login with Google</ExternalLoginText>
            </ExternalLogin>
          </LoginBoxContent>
        </LoginBox>
      </Content>
    </Container>
  )
}

export default Login;