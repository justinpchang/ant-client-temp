import React from 'react';

import {
    Button,
} from './Button.styles';

const BlueButton = ({ icon, inactive }) => {

    return (
        <>
            <Button blue icon={icon} inactive={inactive}>Button</Button>
        </>
    );
};

export default BlueButton;