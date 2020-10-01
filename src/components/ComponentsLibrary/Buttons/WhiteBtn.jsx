import React from 'react';

import {
    Button,
    Icon
} from './Button.styles';

const WhiteBtn = ({ icon, inactive }) => {
    const displayIcon = (!icon) ? '' : (
        <Icon></Icon>
    )

    return (
        <Button white icon={icon} inactive={inactive}>{displayIcon}Button</Button>
    );
};

export default WhiteBtn;