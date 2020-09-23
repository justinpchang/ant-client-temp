import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  bottom: 0;
  margin: auto;
`;

export const Header = styled.h1`
  text-align: center;
  font-weight: ${props => props.bold ? 600 : 200};
  margin-bottom: 20px;
`;

export const LoginBox = styled.div`
  height: 250px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  position: relative;
`;

export const Divider = styled.div`
  height: 100%;
  position: absolute;
  left: 50%;
  border-left: 1px solid lightgrey;
`;

export const LoginBoxContent = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-left: ${props => props.left ? 0 : "50%"};
  padding: 20px;
  width: 50%;
  height: 100%;
`;

export const LoginInput = styled.input`
  position: relative;
  height: 25px;
  width: 100%;
  margin-top: 12px;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 8px;
  font-size: 13px;
`;

export const TinyText = styled.p`
  text-align: left;
  font-size: 10px;
  color: black;
  margin-top: 8px;
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
`;