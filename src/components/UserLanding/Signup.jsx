import React from 'react';

import history from '../../history';
import logo from '../../images/ANT_Logo_White.svg';
import google from '../../images/google_logo.png';
import facebook from '../../images/facebook_logo.png';
import {
  Background,
  MainContainer,
  Row,
  Column,
  Logo,
  Tagline,
  BottomText,
  Link,
  InputText,
  Input,
  Button,
  Divider,
  Selector,
  ExternalLogin,
  ExternalLoginImg,
} from './Login.styles';

function Signup(props) {
  return (
    <Background>
      <MainContainer>
        <Column> 
          <Logo src={logo} />
          <Tagline>Curating talent across the globe.</Tagline>
          <BottomText>Already have an account? <Link onClick={() => history.push("/login")}>SIGN IN</Link></BottomText>
        </Column>
        <Column right>
          <Row>
            <Column small scalar={1.5}>
              <InputText>What describes you best?</InputText>
            </Column>
            <Column small right>
              <InputText>
                <Selector>
                  <span style={{textAlign:"left",backgroundColor:"white"}}>Student</span>
                  <span style={{float:"right"}}>Business</span>
                </Selector>
              </InputText>
            </Column>
          </Row>
          <Row>
            <Column small>
              <InputText>First name</InputText>
              <Input type="text" />
            </Column>
            <Column small>
              <InputText>Last name</InputText>
              <Input type="text" />
            </Column>
          </Row>
          <InputText>Email</InputText>
          <Input type="email" placeholder="Enter university email" />
          <InputText>Password</InputText>
          <Input type="password" placeholder="6+ characters" />
          <InputText>By signing up, you agree to the <Link light>ANT Terms of service</Link>, <Link light>Privacy policy</Link>, and <Link light>Data processing agreement</Link>.</InputText>
          <Button>SIGN UP</Button>
          <Divider />
          <Row>
            <ExternalLogin>
              <ExternalLogi><ExternalLoginImg src={google} /></Column>
              <Column>Sign up with Google</Column>
            </ExternalLogin>
            <ExternalLogin>
              Sign up with Facebook
            </ExternalLogin>
          </Row>
        </Column>
      </MainContainer>
    </Background>
  )
}

export default Signup;