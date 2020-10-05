import React from 'react';

import {
	RowWrapper,
} from './Layout.styles';

// THIS NEEDS TO BE REFACTORED.
// - Row should be able to FIT inside a bordered box.
// - Row should not have border
// - Content box has border

const Row = (props) => {

	return (
		<>
		<RowWrapper>
			{ props.children }
		</RowWrapper>
		</>
	);
};

export default Row;