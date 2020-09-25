import styled from 'styled-components';

export const Spacer = styled.div`
  display: block;
  width: 100%;
  height: ${props => props.height}px;
`;

export const Container = styled.div`
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const Header = styled.h1`
  text-align: center;
  font-weight: ${props => props.bold ? 600 : 200};
  margin-bottom: 20px;
`;

export const LoginBox = styled.div`
  height: 250px;
  width: 50%;
  margin: 0 auto;
  min-width: 600px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const Divider = styled.div`
  height: 100%;
  position: absolute;
  left: 50%;
  border-left: 1px solid lightgrey;
`;

export const LoginBoxContent = styled.div`
  height: 100%;
  flex: 1;
`;

export const LoginInput = styled.input`
  display: block;
  height: 25px;
  width: 75%;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 8px;
  font-size: 13px;
`;

export const ExternalLogin = styled.div`
  display: flex;
  height: 25px;
  width: 75%;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 8px;
`;

export const ExternalLoginText = styled.p`
  margin-left: 10px;
  font-weight: 200px;
  font-size: 13px;
  padding: 5px 0;
  cursor: default;
`;

export const TinyText = styled.p`
  text-align: left;
  font-size: 12px;
  color: black;
  margin-top: ${props => props.out ? "90px" : "8px"};
  margin-left: 10%;
  display: inline-block;
`;

export const LoginButton = styled.button`
  width: 60px;
  height: 25px;
  background: rgba(17, 195, 206, 0.21);
  border-radius: 5px;
  display: inline-block;
  float: right;
  margin-top: 10px;
  margin-right: 10%;
  font-size: 13px;
`;