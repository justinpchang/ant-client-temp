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
    margin: 167px 0 10px 0;
    width: 300px;
`;

export const Input = styled.input`
    width: 100%;
    height: 37px;

    margin: 5px 0 15px 0;

    background: #FFFFFF;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
    border-radius: 5px;
    ::placeholder,
    ::-webkit-input-placeholder{
        padding-left: 10px;
        color: ${COLORS.GREY};
        font-size: 14px;
    }
`;

export const Label = styled.label`
    font-weight: bold;
    font-size: 13px;
    margin-left: 3px;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;

    color: #FFFFFF;
    background: #404BDB;
    opacity: 0.5;
    border-radius: 5px;
    :hover {
        transition: .2s;
        opacity: 1;
    }
`;