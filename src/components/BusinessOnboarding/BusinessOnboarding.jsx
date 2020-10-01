import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';

const BusinessOnboarding = () => {
    const [currentStep, setCurrentStep] = useState(2);
    // Option is for step 4/5 on whether or not to Hire a Consultant, or Post a Project

    const _next = () => {
        let step = currentStep >= 1 ? 2 : currentStep + 1;
        setCurrentStep(step);
        
    };
    
    const nextPage = () => {
        if(currentStep <= 2 ) {
            return (
                <button
                    type="button"
                    onClick={_next}
                >
                    Next
                </button>
            );
        }
        return null;
    };

    return (
        <>
            <Link to='/home'>Home</Link>
            {nextPage()}
            <Step1 currentStep={currentStep} />
            <Step2 currentStep={currentStep} />
        </>
    );
};

export default BusinessOnboarding;