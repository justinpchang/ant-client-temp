import React from 'react';

import {
	GridWrapper
} from './Layout.styles';

/* 
	USAGE: Grid sets justify-content and wraps around Row's creating a responsive grid.
	PROPS:
	children: Row's being passing through
 */

const Grid = (props) => {

	return (
		<>
			<GridWrapper>
				{ props.children }
			</GridWrapper>
		</>
	);
};

export default Grid;