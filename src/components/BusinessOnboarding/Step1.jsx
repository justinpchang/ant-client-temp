import React from 'react';

import CompanyCard from './CompanyCard';

import {
    Background,
    MainContainer
} from './BusinessOnboarding.styles';

const Step1 = ({ currentStep }) => {
    if(currentStep !== 1) {
        return null
    };

    return (
        <Background>
            <MainContainer>
                <CompanyCard input={'Enter a company name. eg. Google'} title={'Create a new company'} button={'START A COMPANY'} />
            </MainContainer>
            <MainContainer>
                <CompanyCard input={'Search company'} title={'Join an existing company'} button={'ASK TO JOIN'} />
            </MainContainer>
        </Background>
    );
};

export default Step1;