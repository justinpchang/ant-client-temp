import React from 'react';

import {
	ColumnWrapper,
} from './Layout.styles';

/* 
	USAGE: This creates a row/wrap for your divs inside the row
  PROPS:
	layout: *justify-content* ? 'spaceAround', 'spaceBetween', 'spaceEvenly', 'flexStart', 'flexEnd', 'center'
	children: row/wrap on divs/content being passed through
 */

const Column = (props) => {

	return (
		<>
			<ColumnWrapper layout={props.layout}>
				{ props.children }
			</ColumnWrapper>
		</>
	);
};

export default Column;