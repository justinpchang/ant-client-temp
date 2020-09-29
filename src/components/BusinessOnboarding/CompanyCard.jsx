import React from 'react';

import {
    CardWrapper,
    Title,
    Label,
    Input,
    Button,

} from './BusinessOnboarding.styles';

const CompanyCard = (props) => {

    return (
        <>
           <CardWrapper>
                <Title>{props.title}</Title>
                <Label>Company Name</Label>
                <Input placeholder={props.input} />
                <Button>{props.button}</Button>
           </CardWrapper>
        </>
    );
};

export default CompanyCard;