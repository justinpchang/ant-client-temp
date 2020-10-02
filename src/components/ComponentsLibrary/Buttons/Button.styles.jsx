import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const Button = styled.button`
    // THIS IS TEMP FOR DEVELOPMENT REMOVE FOR PRODUCTION //
        margin: 10px;
    // ******** //

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 40px;
    padding: 0 ${(props) => props.size ? props.size : '1'}rem;

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

        span {
            ::before {
                background: ${COLORS.BLUE};
            }
            ::after {
                background: ${COLORS.BLUE};
            }
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

        span {
            ::before {
                background: ${COLORS.WHITE};
            }
            ::after {
                background: ${COLORS.WHITE};
            }
        }
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

        span {
            ::before {
                background: ${COLORS.WHITE};
            }
            ::after {
                background: ${COLORS.WHITE};
            }
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
    position: relative;

    height: 22px;
    margin-right: 18px;
    padding-left: 6px;
    
    :before, :after {
        position: absolute;
        top: 20.83%;
        bottom: 20.83%;

        content: ' ';
        height: 14px;
        width: 2.5px;
    }
    ::before {
        transform: rotate(0deg);
        background: ${COLORS.WHITE};
        border-radius: 10px;
    }
    ::after {
        transform: rotate(-90deg);
        background: ${COLORS.WHITE};
        border-radius: 10px;
    }
`; 