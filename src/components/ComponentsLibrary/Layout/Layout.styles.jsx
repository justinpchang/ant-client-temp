import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const ContentWrapper = styled.div`
	max-width: 1000px;

	margin: 1% 0;
	padding: 0 30px 30px 30px;

	border: 1px solid ${COLORS.GREY};
	background: ${COLORS.WHITE};
	box-sizing: border-box;
	border-radius: 5px;
`;
export const RowWrapper = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 100%;
	height: 100%;
	
`;
export const ColumnWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;

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

	> * {
		margin-top: 30px;
	}
`;