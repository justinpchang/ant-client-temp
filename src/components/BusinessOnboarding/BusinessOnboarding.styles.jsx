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

  ${props => props.profile ? `{
    width: 70%; height: 70%; min-height: 660px; 
    @media (max-width: 780px) {width: 70%; min-height: 830px};
    @media (max-width: 530px) {width: 90%}
    }`
    : 
    ''}
`;
export const CardWrapper = styled.div`
    padding: 20px;
    margin-top: 15px;

    ${props => props.profile ? 
        'margin-top: 0; padding: 45px; @media (max-width: 530px) {padding: 10px;}' 
        : 
        ''}
`;  
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const Column = styled.div`
    flex: ${(props) => props.size};
`;
export const Title = styled.h1`
    width: 200px;

    margin: 167px 0 10px 0;
    font-weight: 600;
    letter-spacing: -2px;

    ${props => props.profile ? 'margin: 0 0 35px 0; font-size: 37px; width: 300px' : ''}
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
    text-indent: 2.5%;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${COLORS.GREY};
    }

    ${props => props.profile ? 'width: 80%; min-width: 270px; margin-bottom: 6%;' : ''}
    ${props => props.last ? 'margin-bottom: 2%' : ''}
`;
export const SelectField = styled.select`
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
    text-indent: 1.5%;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${COLORS.GREY};
    }

    ${props => props.profile ? 'width: 80%; min-width: 270px; margin-bottom: 6%;' : ''}
    ${props => props.last ? 'margin-bottom: 2%' : ''}
`
export const TextField = styled.textarea`
    width: 100%;
    height: 80px;

    margin: 5px 0 15px 0;

    background: #FFFFFF;
    border: 1px solid #B4B4B4;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    padding-top: 8px;

    text-indent: 2.5%;
    
    ::placeholder,
    ::-webkit-input-placeholder{
        color: ${COLORS.GREY};
    }

    ${props => props.profile ? 'width: 80%; min-width: 270px; margin-bottom: 6%;' : ''}
`;
export const Label = styled.div`
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
export const CompanyLogoDiv = styled.div`
    margin-top: 122px;
    @media (max-width:780px) {
        margin-top: 30px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
`;
export const CompanyLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;

    margin-top: 5px;
    border: 1px solid #B4B4B4;
    border-radius: 5px;

    background: #FFFFFF;
    box-sizing: border-box;
`;
export const CompanyLogoBtn = styled.button`
    margin-top: 10px;
    width: 102px;
    height: 40px;

    border: 1px solid #404BDB;
    box-sizing: border-box;
    border-radius: 2px;
    font-weight: 600;
    background: #FFFFFF;
    color: #404BDB;
`;
export const Text = styled.p`
    font-size: 16px;
    line-height: 22px;

    letter-spacing: 0.15px;

    color: #161616;

    ${(props) => props.term ? 'margin-top: 10px' : ''}
`;
export const CheckBox = styled.input`
    height: 15px;
    margin: 10px 7px 0 0;
`;
export const Terms = styled.div`
    display: flex;
    align-items: center;

    margin-left: 4px;
`
export const RequiredSpan = styled.span`
    color: red;
`;