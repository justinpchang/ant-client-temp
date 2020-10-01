import React from 'react';

import {
    Button,
    Icon
} from './Button.styles';

const SecondaryBtn = ({ icon, inactive, size, children }) => {
    const displayIcon = (!icon) ? '' : (
        <Icon></Icon>
    );

    return (
        <Button white stroke size={size} inactive={inactive}>{displayIcon}{children}</Button>
    );
};

export default SecondaryBtn;