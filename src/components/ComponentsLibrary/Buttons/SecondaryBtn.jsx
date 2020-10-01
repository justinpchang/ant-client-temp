import React from 'react';

import {
    Button,
} from './Button.styles';

const SecondaryBtn = ({ icon, inactive }) => {

    return (
        <>
            <Button white stroke icon={icon}>Button</Button>
        </>
    );
};

export default SecondaryBtn;