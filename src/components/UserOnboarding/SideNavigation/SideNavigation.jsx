import React from 'react';

import {
    SideNav,
    SideNavItem,
    SideNavLogo,
    StepDiv,
    NavCheck
} from './SideNavigation.styles';


const SideNavigation = () => {

    return (
        <>
           <SideNav>
                <SideNavLogo>LOGO</SideNavLogo>   
               <SideNavItem>
                    <StepDiv><NavCheck type="radio" />My Profile</StepDiv>
               </SideNavItem>
               <SideNavItem>
                    <StepDiv><NavCheck type="radio" />Work Experience</StepDiv>
               </SideNavItem>
                <SideNavItem>
                    <StepDiv><NavCheck type="radio" />My Skills</StepDiv>
                </SideNavItem>
                <SideNavItem border="white">
                    <StepDiv><NavCheck type="radio" />Portfolio</StepDiv>
                </SideNavItem>
                <SideNavItem>
                    <StepDiv><NavCheck type="radio" />Let's Get Started!</StepDiv>
                </SideNavItem>
            </SideNav> 
        </>

    );
};

export default SideNavigation;