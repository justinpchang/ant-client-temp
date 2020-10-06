import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const GridWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;
export const RowWrapper = styled.div`
	display: flex;
	flex-flow: column wrap;

	// This needs to be testing - depends on how the rest of the designs are, and I can ->
	// set this to the lowest border component to fix children squishing
	// default width
	min-width: 500px;

	width: ${(props) => props.width}px;

	margin: 1% 0;
	padding: 0 30px 30px 30px;

	background: ${COLORS.WHITE};
	box-sizing: border-box;
	border-radius: 5px;

	${(props) => props.border ? `{
		border: 1px solid ${COLORS.GREY};
	}` : 'border: none;'}
`;
export const ColumnWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;

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
	}` : ''};
	${(props) => props.layout === 'flexEnd' ? `{
		justify-content: flex-end;
	}` : ''};

	// children
	> * {
		margin-top: 30px;
	}
`;
