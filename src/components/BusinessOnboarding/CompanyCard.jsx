import React from 'react';

import {
    CardWrapper,
    Title,
    Label,
    Input,
    Button,

} from './BusinessOnboarding.styles';

const CompanyCard = ({ title, input, button }) => {

    return (
        <>
           <CardWrapper>
                <Title>{title}</Title>
                <Label>Company Name</Label>
                <Input placeholder={input} />
                <Button>{button}</Button>
           </CardWrapper>
        </>
    );
};

export default CompanyCard;