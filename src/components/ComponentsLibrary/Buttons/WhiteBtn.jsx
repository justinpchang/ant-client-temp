import React from 'react';

import {
	Button,
	Icon
} from './Button.styles';

/* 
  PROPS:
  icon?: icon prop loads css dependin if the buttons needs a '+' icon
  inactive?: inactive prop loads css depending if button needs to be inactive
	width?: PADDING (left-right) int - specify width (defualt 16px)
	children: text for button
 */
 
const WhiteBtn = (props) => {
	const displayIcon = (!props.icon) ? '' : (
		<Icon></Icon>
	);

	return (
		<Button white width={props.width} inactive={props.inactive}>{displayIcon}{props.children}</Button>
	);
};

export default WhiteBtn;