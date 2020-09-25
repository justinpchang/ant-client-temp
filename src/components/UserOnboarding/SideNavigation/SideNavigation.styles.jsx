import styled from 'styled-components';

export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;

    height: 100%;
    width: 15%;

    font-size: 13px;
    background: #0D2249;
`;  
export const SideNavItem = styled.div`  
    margin: 2% 0 2% 3%;
    padding: 5px;
    border-bottom: 1px solid ${(props) => props.border ? "rgba(255, 255, 255, 0.5)" : "#0D2249"};

    font-size: 1.3vw;
    color: rgba(255, 255, 255, 0.5);
`;

export const StepDiv = styled.div`
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.5); 
`;

export const NavCheck = styled.input`
    height: 1.5vw;

    margin: 0 2% 0 2%;
    background: #FFFFFF;
    color: rgba(255, 255, 255, 0.5);
`;

export const SideNavLogo = styled.div`
    /* ANT_Logo_White */
    padding: 5% 35%;
    
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

    font-size: 1.5vw;
    color: #11C3CE;
`;

// export const Hr = styled.div`
//     /* Line 2 */

//     width: 219px;
//     height: 0px;

//     border-bottom: 1.5px solid lightgrey;
// `;