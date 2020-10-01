import styled from 'styled-components';
import { COLORS } from '../../../constants';


export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 93px;
    box-sizing: border-box;
    border-radius: 2px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    :hover {
        box-shadow: 0px 2.5px 2px rgba(0, 0, 0, 0.25);
        transition: .1s;
    }
    :focus {
        outline: none;
    }

    ${(props) => props.white ? `{
        background: ${COLORS.WHITE};
        color: ${COLORS.BLUE};

        :active {
            background: #F9F9F9;
            box-shadow: none;
        }
    }` 
    : 
    ''}
    ${(props) => props.blue ? `{
        background: ${COLORS.BLUE};
        color: ${COLORS.WHITE};

        :active {
            background: ${COLORS.DARKBLUE};
        }
    }` 
    : 
    ''}
    ${(props) => props.icon ? `{
        width: 112px;
    }`
    :
    ''}
    ${(props) => props.inactive ? `{
        background: #D2D2D2;
        color: ${COLORS.WHITE};

        :active {
            background: #D2D2D2;
        }
        :hover {
            box-shadow: none;
        }
    }`
    :
    ''}
    ${(props) => props.stroke ? `{
        border: 1px solid ${COLORS.BLUE};

        :active {
            background: rgba(255, 255, 255, 0.5);
        }
    }`
    :
    ''}
`;

export const Icon = styled.span`
    width: 32px;
    height: 20px;
    color: black;
    
    :before, :after {
        position: absolute;
        content: ' ';
        height: 20px;
        width: 4px;

        border-radius: 50px;
        background: #333;
    }
    ::before {
        transform: rotate(0deg);
    }
    ::after {
        transform: rotate(-90deg);
    }
`; 