import React from 'react';
import { Link } from 'react-router-dom';

import CompanyCard from './CompanyCard';

import {
    Background,
    MainContainer
} from './BusinessOnboarding.styles';

// Theres gotta be a better way..
const text = {
    input: [
        'Enter a company name. eg. Google',
        'Search company'
    ],
    title: [
        "Create a new company",
        "Join an existing company"
    ],
    button: [
        'START A COMPANY',
        'ASK TO JOIN'
    ]
};

const BusinessOnboarding = () => {

    return (
        <>
            <Link to='/home'>Home</Link>
            <Background>
                <MainContainer>
                    <CompanyCard input={text.input[0]} title={text.title[0]} button={text.button[0]} />
                </MainContainer>
                <MainContainer>
                    <CompanyCard input={text.input[1]} title={text.title[1]} button={text.button[1]} />
                </MainContainer>
            </Background>
        </>
    );
};

export default BusinessOnboarding;