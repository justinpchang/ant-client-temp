import React from 'react';

import {
    Content,
    TitleContainer,
    Title
} from './UserOnboarding.styles';

const Step2Profile = (props) => {
    if(props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <Content>
                <TitleContainer>
                    <Title>PROFILE</Title>
                </TitleContainer>
            </Content>
        </>
    );
};

export default Step2Profile;