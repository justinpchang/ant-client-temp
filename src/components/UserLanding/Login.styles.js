import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.LIGHT_GREY};
`;

export const MainContainer = styled.div`
  min-height: 400px;
  width: 60%;
  overflow: auto;
  background: ${COLORS.WHITE};
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${props => props.scalar ? props.scalar : 1};
  padding: ${props => props.small ? "0px" : "40px"};
  margin-right: ${props => props.small ? "5px" : "0px"};
  position: relative;
  ${props => props.right
  ? "justify-content: center;"
  : ""}
`;

export const Logo = styled.img`
  position: fixed;
  width: 58px;
  height: 25px;
  filter: brightness(0) saturate(100%) invert(40%) sepia(93%) saturate(6092%) hue-rotate(234deg) brightness(89%) contrast(92%);
`;

export const Tagline = styled.p`
  width: 100%;
  font-size: 3vw;
  font-weight: 600;
  margin-top: 20%;
`;

export const BottomText = styled.p`
  font-size: 16px;
  font-weight: 400;
  display: block;
  float: bottom;
  position: absolute;
  bottom: 15%;
`;

export const Link = styled.span`
  color: ${COLORS.PURPLE};
  font-weight: ${props => props.light ? 400 : 600};
  cursor: pointer;
`;

export const InputText = styled.label`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.15px;
  ${props => !props.first ? "margin-top: 20px" : "margin-top: -30px"};
`;

export const Input = styled.input`
  width: 100%;
  height: 37px;
  border: 1px solid ${COLORS.GREY};
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 5px;
  padding: 0 10px;

  ::placeholder,
  ::-webkit-input-placeholder{
    color: ${COLORS.GREY};
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};
  padding: 13px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 50%;
  height: 0px;
  border: .5px solid ${COLORS.GREY};
  margin: 0 auto;
  margin-top: 25px;
`;

export const LoginButton = styled.div`
  background: ${COLORS.WHITE};
  width: 90%;
`;

export const Selector = styled.div`
  width: 100%;
  border: 1px solid ${COLORS.PURPLE};
  font-size: 13px;
  padding: 6px;
  margin-top: -6px;
  margin-left: -10px;
`;

export const ExternalLogin = styled(Column)`
  border: 1px solid ${COLORS.GREY};
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 600;
`;

export const ExternalLoginImg = styled.img`
  height: 16px;
  width: 16px;
`;