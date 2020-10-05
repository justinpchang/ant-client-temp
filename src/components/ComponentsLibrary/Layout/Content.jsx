import React from 'react';

import {
	ContentWrapper
} from './Layout.styles';

const Content = (props) => {

	return (
		<>
			<ContentWrapper>
				{ props.children }
			</ContentWrapper>
		</>
	);
};

export default Content;