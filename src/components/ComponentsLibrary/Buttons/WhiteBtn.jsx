import React from 'react';

import {
    Button,
    Icon
} from './Button.styles';

const WhiteBtn = ({ icon, inactive, size, children }) => {
    const displayIcon = (!icon) ? '' : (
        <Icon></Icon>
    );

    return (
        <Button white size={size} icon={icon} inactive={inactive}>{displayIcon}{children}</Button>
    );
};

export default WhiteBtn;