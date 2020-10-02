import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const StyledLabel = styled.p`
  position: absolute;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;

  ${props => props.footnote ? `
    top: ${props.height + 5 || 45}px;
    font-size: 12px;
    line-height: 12px;
    color: ${props.error ? COLORS.RED : props.validated && COLORS.TEAL};
  ` : `
    top: -20px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: ${COLORS.BLACK};
  `}
`;