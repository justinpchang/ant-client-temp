import React from 'react';

import {
    Background,
    MainContainer,
    CardWrapper,
    Title,
    Input,
    Label,
    CompanyLogoDiv,
    CompanyLogo,
    CompanyLogoBtn,
    Row,
    Column,
    TextField,
    CheckBox,
    Text,
    SelectField,
    RequiredSpan,
    Terms
} from './BusinessOnboarding.styles';

const Step2 = ({ currentStep }) => {
    if(currentStep !== 2) {
        return null
    };

    return (
        <Background>
            <MainContainer profile >
                <CardWrapper profile >
                    <Row>
                        <Column size={2}>
                            <Title profile >Create your company profile</Title>
                            <Label>Company Name <RequiredSpan>*</RequiredSpan></Label>
                            <Input profile placeholder="eg. Google" requiredStr />
                            <Label>Company Description  <RequiredSpan>*</RequiredSpan></Label>
                            <TextField profile placeholder="Describe your company under 200 words" requiredStr />
                            <Label>Company Size  <RequiredSpan>*</RequiredSpan></Label>
                            <SelectField profile placeholder="11-100 employees" requiredStr >
                                <option value="11-100">11-100 employees</option>
                            </SelectField>
                            <Label>Company Location</Label>
                            <Input profile last placeholder="eg. Toronto, Canada" />
                            <Terms>
                                <CheckBox type="checkbox" />
                                <Text term>My company works completely remote</Text>
                            </Terms>
                        </Column>
                        <Column size={1}>
                            <CompanyLogoDiv>
                                <Label>Company Logo</Label>
                                <CompanyLogo>Logo</CompanyLogo>
                                <CompanyLogoBtn>UPLOAD</CompanyLogoBtn>
                            </CompanyLogoDiv>
                        </Column>
                    </Row>
                </CardWrapper>
            </MainContainer>
        </Background>
    );
};

export default Step2;