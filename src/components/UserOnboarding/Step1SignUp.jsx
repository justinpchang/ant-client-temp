import React from 'react';
import { Link } from 'react-router-dom';

import {
    Content,
    Container,
    Header,
    SubHeader,
    InputField,
    Label,
    VerticalHR,
    SignInLink,
    Terms,
    Checkbox,
    Button
} from './UserOnboarding.styles';

const Step1SignUp = (props) => {
    if(props.currentStep !== 1) {
        return null;
    }

    return (
        <>
           <Content>
                <Container>
                    <Header>Earn, Learn, and Grow
                        <SubHeader>Start Learning</SubHeader>
                    </Header>
                    <InputField left="27px" top="29px" width="146px" type="text" placeholder="First Name" />
                    <InputField left="203px" top="29px" width="148px" type="text" placeholder="Last Name" />
                    <InputField left="27px" top="109px" width="324px" type="password" placeholder="Password" />
                    <Label for="DOB">Date of Birth</Label>
                    <InputField left="27px" top="210px" width="324px" id="DOB" type="DOB" placeholder="MM/DD/YYYY" />
                    <SignInLink>Already have an account? <Link to="#!">Sign In</Link></SignInLink>
                    <VerticalHR />
                    <InputField right="27px" top="29px" width="324px" type="email" placeholder="University Email" />
                    <InputField right="27px" top="109px" width="324px" type="password" placeholder="Re-enter Password" />
                    <Checkbox type="radio" />
                    <Terms>I AGREE TO TERMS OF SERVICE</Terms>
                    <Button>Sign Up</Button>
                </Container>   
            </Content> 
        </>
    );
};

export default Step1SignUp;