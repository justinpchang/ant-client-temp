import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    position:relative;
    height: 100vh;
`;

export const Container = styled.div`
    /* Rectangle 77 */

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: 761px;
    height: 333px;

    background: #FFFFFF;
    border: 1.5px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Assistant;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`;

export const Header = styled.div`
    /* Earn, Learn, and GrowStart learning */

    position: absolute;
    width: 802px;
    height: 113px;
    left: 50%;
    top: -140px;
    transform: translate(-50%, -10%);

    font-weight: bold;
    font-size: 48px;
    line-height: 63px;
    text-align: center;
`;

export const SubHeader = styled.div`
    font-weight: normal;
`;

export const Form = styled.form`
    width: 100%;
`;

export const Input = styled.input`
    /* Rectangle 20 */

    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};

    width: ${(props) => props.width};
    height: 60px;

    border: 1px solid rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 16px;
    
    font-family: Assistant;
    font-size: 24px;
    background: #FFFFFF;
    color: #000000;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: grey;
    }
    :-ms-input-placeholder {
        color: grey;
    }
`;

export const Button = styled.button`
    /* Rectangle 21 */

    position: absolute;
    right: 27px;
    top: 240px;

    width: 113px;
    height: 38px;

    border-radius: 5px;
    border: none;

    font-size: 24px;
    line-height: 31px;
    background: #11C3CE;
`;

export const Label = styled.label`
    /* Date of Birth */

    position: absolute;
    top: 180px;
    left: 27px;

    width: 138px;
    height: 22px;

    font-size: 24px;
    line-height: 31px;
    color: rgba(0, 0, 0, 0.7);
`;

export const SignInLink = styled(Link)`
    position: absolute;
    right: 14px;
    bottom: -2px;
    text-align: center;

    width: 50px;
    height: 18px;

    border-radius: 5px;
    border: none;
    text-decoration: none;

    font-size: 15px;
    line-height: 18px;
    background: rgb(243, 243, 243);
`;

export const SignIn = styled.div`
    /* Already have an account? Sign in */

    position: absolute;
    bottom: 18px;
    left: 27px;

    width: 255px;
    height: 18.4px;

    color: #000000;
`;

export const VerticalHR = styled.div`
    /* Line 5 */

    position: absolute;
    left: 213px;
    top: 49.7%;
    transform: rotate(90deg);

    width: 331px;
    height: 0px;

    border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const Terms = styled.div`
    /* I AGREE TO TERMS OF SERVICE */

    position: absolute;
    width: 198px;
    height: 21px;
    right: 28px;
    top: 203px;

    font-weight: 600;
    font-size: 11px;
    line-height: 18px;
    color: #000000;
`;

export const Checkbox = styled.input`
    /* Subtract */

    position: absolute;
    right: 235px;
    top: 197px;

    width: 22px;
    height: 22px;

    background: #DADADA;
`;