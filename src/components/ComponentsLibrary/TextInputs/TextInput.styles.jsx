import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const Container = styled.div`
  position: relative;
  top: -17px;
  width: ${props => props.width ? props.width : 300}px;
`;

export const StyledTextInput = styled.input`
  margin: 0;
  padding: 0;
  width: ${props => props.width ? props.width : 300}px;
  height: ${props => props.height ? props.height : 40}px;
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DARK_GREY};
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 10px;
  outline: 0;
  font-family: Roboto, Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  :focus {
    border: 1px solid ${COLORS.PURPLE};
  }

  ${props => props.error && `
    border-color: ${COLORS.RED};
  `}

  ${props => props.validated && `
    border-color: ${COLORS.TEAL};
  `}

  ${props => props.disabled && `
    border-color: ${COLORS.LIGHT_GREY};
  `}
`;