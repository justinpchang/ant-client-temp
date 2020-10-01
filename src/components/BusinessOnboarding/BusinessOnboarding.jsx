import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Test from './Test';

const BusinessOnboarding = () => {
    const [currentStep, setCurrentStep] = useState();
    // Option is for step 4/5 on whether or not to Hire a Consultant, or Post a Project
    const [option, setOption] = useState(null);

    const _next = () => {
        let step = currentStep >= 6 ? 7 : currentStep + 1;
        // Checking if current option is consultant, if it is move to step 6 passing step5 - Project
        // Project doesn't need an edge case because it is step 5 and the next step is 6.
        // I need to set the option to Null right after because line 22 will keep coming back true.
        if(option === 'consultant') {
            setCurrentStep(6)
            setOption(null)
        } else {
            setCurrentStep(step);
        }
    };
    
    const nextPage = () => {
        if(currentStep === 3) {
            return null
        } else if(currentStep <= 6 ) {
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

    const submitButton = () => {
        if(currentStep > 6) {
            return (
                <button
                    type="submit"
                    // onClick={}
                >
                    Submit
                </button>
            );
        }
        return null;
    };

    return (
        <>
            <p>This is Business Onboarding page.</p>
            <Link to="/home">Home</Link>
            <form>
                <Test />
                {nextPage()}
                {submitButton()}
            </form>
        </>
    );
};

export default BusinessOnboarding;