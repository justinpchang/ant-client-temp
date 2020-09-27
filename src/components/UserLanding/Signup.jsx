import React from 'react';

import history from '../../history';
import logo from '../../images/ANT_Logo_White.svg';
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
            <Column small scalar={2}>
              <InputText>What describes you best?</InputText>
            </Column>
            <Column small right>
              <Selector>Student | Business</Selector>
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
          <InputText>Google | Facebook</InputText>
        </Column>
      </MainContainer>
    </Background>
  )
}

export default Signup;