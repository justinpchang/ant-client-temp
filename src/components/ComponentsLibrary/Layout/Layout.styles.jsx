import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const RowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1000px;
	height: 100%;

	margin: 30px 10% 0 10%;
	
	border: 1px solid ${COLORS.GREY};
	background: ${COLORS.WHITE};
	box-sizing: border-box;
	border-radius: 5px;
`;
export const ColumnWrapper = styled.div`
	// DEVELOPMENT DELETE WHEN DONE //
		// background: black;
		border: 2px solid red;
	// ************************ //

	display: flex;
	flex-flow: row wrap;
	padding: 30px 0 30px 0;

	${(props) => props.layout === 'spaceBetween' ? `{
		justify-content: space-between;
	}` : ''};
	${(props) => props.layout === 'spaceEvenly' ? `{
		justify-content: space-evenly;
	}` : ''};
	${(props) => props.layout === 'spaceAround' ? `{
		justify-content: space-around;
	}` : ''};
	${(props) => props.layout === 'center' ? `{
		justify-content: center;
	}` : ''};
	${(props) => props.layout === 'flexStart' ? `{
		justify-content: flex-start;
		padding-left: 30px;
		padding-bottom: 30px;
	}` : ''};
	${(props) => props.layout === 'flexEnd' ? `{
		justify-content: flex-end;
		padding-right: 30px;
		padding-bottom: 30px;
	}` : ''};

	> * {

	}
`;