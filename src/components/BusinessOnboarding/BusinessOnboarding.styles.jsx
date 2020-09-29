import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${COLORS.LIGHT_GREY};
`;

export const MainContainer = styled.div`
  min-height: 430px;
  width: 340px;
  overflow: auto;
  background: ${COLORS.WHITE};
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1% 1% 2% 1%;
`;

export const CardWrapper = styled.div`
    padding: 20px;
    margin-top: 15px;
`;
    
export const Title = styled.h1`
    width: 200px;

    margin: 167px 0 10px 0;
    font-weight: 600;
    letter-spacing: -2px;
`;

export const Input = styled.input`
    width: 100%;
    height: 37px;

    margin: 5px 0 15px 0;

    background: ${COLORS.WHITE};
    color: ${COLORS.GREY};
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;

    // moz
    text-indent: 3.8%;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${COLORS.GREY};
    }
`;

export const Label = styled.label`
    font-size: 13px;
    margin-left: 3px;

    ${(props) => props.bold ? 'font-weight: bold;' : ''}
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    font-size: 14px;

    font-weight: 600;
    letter-spacing: 2px;

    color: ${COLORS.WHITE};
    background: #404BDB;
    opacity: 0.5;
    border-radius: 5px;
    
    // moz + saf
    font-size-adjust: .55;
    
    :hover {
        transition: .2s;
        opacity: 1;
    }
`;