import styled from 'styled-components';

export const Content = styled.div`
    position:relative;
    height: 100vh;
`;

export const Container = styled.div`
    /* Rectangle 77 */

    position: absolute;
    width: 761px;
    height: 333px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    background: #FFFFFF;
    border: 1.5px solid rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 10px;
`;

export const Header = styled.div`
    /* Earn, Learn, and GrowStart learning */

    position: absolute;
    width: 802px;
    height: 113px;
    left: 50%;
    top: -140px;
    transform: translate(-50%, -10%);

    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 63px;
    text-align: center;

    color: #000000;
`;
export const SubHeader = styled.div`
    font-weight: normal;
    font-family: Assistant;
    font-style: normal;
    font-size: 48px;
    line-height: 63px;
    text-align: center;

    color: #000000;
`;

export const InputField = styled.input`
    /* Rectangle 20 */

    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    height: 60px;
    width: ${(props) => props.width};
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 16px;

    font-family: Assistant;
    font-style: normal;
    font-weight: 300;
    line-height: 31px;
    font-size: 24px;
    color: #000000;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-family: Assistant;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 31px;

        color: grey;
    }
    :-ms-input-placeholder {
        font-family: Assistant;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 31px;

        color: grey;
    }
`;
export const Label = styled.label`
    /* Date of Birth */

    position: absolute;
    width: 138px;
    height: 22px;
    top: 180px;
    left: 27px;

    font-family: Assistant;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;

    color: rgba(0, 0, 0, 0.7);
`;

export const VerticalHR = styled.div`
    /* Line 5 */

    position: absolute;
    width: 331px;
    height: 0px;
    left: 213px;
    top: 49.5%;

    border: 1px solid rgba(0, 0, 0, 0.25);
    transform: rotate(90deg);
`;

export const SignInLink = styled.div`
    /* Already have an account? Sign in */

    position: absolute;
    width: 255px;
    height: 18.4px;
    bottom: 18px;
    left: 27px;
    

    font-family: Assistant;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;

    color: #000000;
`;

export const Terms = styled.div`
    position: absolute;
    width: 198px;
    height: 21px;
    right: 28px;
    top: 202px;w

    font-family: Assistant;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 18px;

    color: #000000;

`;

export const Checkbox = styled.input`
    /* Subtract */

    position: absolute;
    width: 22px;
    height: 22px;
    right: 235px;
    top: 197px;

    background: #DADADA;
`;

export const Button = styled.button`
    /* Rectangle 21 */

    position: absolute;
    right: 27px;
    top: 240px;
    width: 113px;
    height: 38px;

    background: #11C3CE;
    border-radius: 5px;
    border: none;

    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;

    color: #000000;
`;