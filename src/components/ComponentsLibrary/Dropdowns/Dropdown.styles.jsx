import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const DropdownWrapper = styled.div`
	position: relative;

	width: ${(props) => props.width ? props.width : '300'}px;
	font-size: 14px;

	${(props) => props.inactive ? `{
		pointer-events:none;
		opacity: .6;
	}`
	: 
	''};
`;
export const Select = styled.div`
	display:flex;
	align-items: center;
	flex-direction: row;

	width: 100%;
	height: 40px;

	background: ${COLORS.WHITE};
	border: 1px solid ${COLORS.DARK_GREY};
	box-sizing: border-box;
	border-radius: 5px;
	color: ${COLORS.GREY};
	
	// moz
	text-indent: 2.5%;
	::placeholder,
	::-webkit-input-placeholder {
			color: ${COLORS.GREY};
	}
`;
export const OptionList = styled.ul`
	display: ${(props) => !props.open ? 'none' : ''};
	position: absolute;

	width: 100%;

	list-style-type: none;
`;
export const Option = styled.li`
	display: flex;
	align-items: center;
	position: relative;

	height: 34px;
	width: 96%;

	padding-left: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);

	background: ${COLORS.WHITE};
	cursor: pointer;

	:first-child {
			margin-top: 3px;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
	};
	:last-child {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	};
`;
export const DropdownBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 3px;

	width: 32px;
	height: 32px;

	background: #EEEEEE;
	box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	cursor: pointer;

	:hover {
			background: #D2D2D2;
			transition: .1s;
	}
`;
export const DropdownBtn = styled.div`
	font-weight: 600;
	font-size: 18px;

	cursor: pointer;

	:hover {
			background: #D2D2D2;
			transition: .1s;
	}
`;  
export const Arrow = styled.img`
	height: 12px;
	width: 8px;

	border-radius: 10px;
	clip-path: polygon(70% 10%, 100% 10%, 40% 50%, 100% 90%, 70% 90%, 5% 50%);
	transform: rotate(${(props) => props.open ? '90' : '270'}deg);

	margin-bottom: ${(props) => props.open ? '0' : '0'}px;
	background-color: ${COLORS.BLACK};
`;
export const Placeholder = styled.span`
	width: 100%;
	height: 18px;
	
	letter-spacing: -0.02em;

	${(props) => props.selected !== props.placeholder ? `color: ${COLORS.BLACK};` : `color: ${COLORS.GREY};`};
`;
export const Label = styled.label`
	position: absolute;
	top: -20px;
	left: 3px;

	margin-left: 3px;

	line-height: 14px;
	letter-spacing: -0.02em;
	color: ${COLORS.BLACK};
`;
export const RequiredSpan = styled.span`
	color: red;
`;