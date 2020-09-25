import React from 'react';

import {
    SideNav,
    SideNavLogo,
    Hr,
    StepDiv,
    NavCheck
} from './SideNavigation.styles';


const SideNavigation = () => {

    return (
        <>
           <SideNav>
                <SideNavLogo>LOGO</SideNavLogo>   
                <Hr top="58px" />
                <StepDiv top="90px" left="12px"><NavCheck type="radio" />My Profile</StepDiv>
                <StepDiv top="130px" left="12px"><NavCheck type="radio" />Work Experience</StepDiv>
                <StepDiv top="170px" left="12px"><NavCheck type="radio" />My Skills</StepDiv>
                <StepDiv top="210px" left="12px"><NavCheck type="radio" />Portfolio</StepDiv>
                <Hr top="260px" />
                <StepDiv top="280px" left="12px"><NavCheck type="radio" />Let's Get Started!</StepDiv>
            </SideNav> 
        </>

    );
};

export default SideNavigation;