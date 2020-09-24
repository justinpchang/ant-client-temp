import React from 'react';

import {
    Content,
    Container,
    Header,
    SubHeader,
    Input,
    Form,
    Label,
    VerticalHR,
    SignIn,
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
                    <Form>
                        <Input name="first-name" left="27px" top="29px" width="146px" type="text" placeholder="First Name" />
                        <Input name="last-name" left="203px" top="29px" width="148px" type="text" placeholder="Last Name" />
                        <Input name="password" left="27px" top="109px" width="324px" type="password" placeholder="Password" />
                        <Label htmlFor="DOB">Date of Birth</Label>
                        <Input name="dob" left="27px" top="210px" width="324px" id="DOB" type="DOB" placeholder="MM/DD/YYYY" />
                        <SignIn>Already have an account? <SignInLink to="#!">Sign In</SignInLink></SignIn>
                        <VerticalHR />
                        <Input name="email" right="27px" top="29px" width="324px" type="email" placeholder="University Email" />
                        <Input name="password" right="27px" top="109px" width="324px" type="password" placeholder="Re-enter Password" />
                        <Checkbox type="radio" />
                        <Terms>I AGREE TO TERMS OF SERVICE</Terms>
                        <Button>Sign Up</Button>
                    </Form>
                </Container>   
            </Content> 
        </>
    );
};

export default Step1SignUp;