import React from 'react';

import {
	ColumnWrapper,
} from './Layout.styles';

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