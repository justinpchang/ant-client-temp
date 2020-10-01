import React from 'react';

import {
    Button,
    Icon
} from './Button.styles';

const BlueButton = ({ icon, inactive, size, children }) => {
    const displayIcon = (!icon) ? '' : (
        <Icon></Icon>
    );

    return (
        <Button blue size={size} inactive={inactive}>{displayIcon}{children}</Button>
    );
};

export default BlueButton;