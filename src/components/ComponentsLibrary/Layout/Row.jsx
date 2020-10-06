import React from 'react';

import {
	RowWrapper,
} from './Layout.styles';

/* 
	USAGE: This creates a row to put your Columns in
  PROPS:
		width?: int - specify width (defualt 500)px
		border?: passing in border gives the Row a border
		children: Column's being passed through
 */

const Row = (props) => {

	return (
		<>
			<RowWrapper width={props.width} border={props.border}>
				{ props.children }
			</RowWrapper>
		</>
	);
};

export default Row;