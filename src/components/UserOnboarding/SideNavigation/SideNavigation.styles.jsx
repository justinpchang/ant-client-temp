import styled from 'styled-components';

export const SideNav = styled.div`
    /* Rectangle 1 */

    position: absolute;
    left: 0px;
    top: -1px;
    
    width: 219px;
    height: 100vh;

    background: #0D2249;
`;

export const SideNavLogo = styled.div`
    /* ANT_Logo_White */

    position: absolute;
    left: 85px;

    width: 76px;
    height: 31px;

    top: 12px;

    color: #11C3CE;
    // background: #11C3CE;
`;

export const Hr = styled.div`
    /* Line 2 */

    position: absolute;
    left: 0px;
    top: ${(props) => props.top};

    width: 219px;
    height: 0px;

    border-bottom: 1.5px solid lightgrey;
`;

export const StepDiv = styled.div`
    position: absolute;

    left: ${(props) => props.left};
    top: ${(props) => props.top};

    width: 100%;
    height: 23px;

    font-weight: bold;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;

    color: #FFFFFF;
`;

export const NavCheck = styled.input`
    position: relative;
    top: 4px;

    width: 22px;
    height: 22px;

    margin-right: 8px;

    background: #FFFFFF;
    color: #FFFFFF;
`;