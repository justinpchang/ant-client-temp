import React from 'react';

import {
	GridWrapper
} from './Layout.styles';

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