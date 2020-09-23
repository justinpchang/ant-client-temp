import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Step1Registration from './Step1Registration';
import Step2UploadOverlay from './Step2UploadOverlay';
import Step3PostHire from './Step3PostHire';
import Step4Consultant from './Step4Consultant';
import Step5Project from './Step5Project';
import Step6Finished from './Step6Finished';
import Step7Profile from './Step7Profile';

const BusinessOnboarding = () => {
    const [currentStep, setCurrentStep] = useState(1);
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
                <Step1Registration
                    currentStep={currentStep}
                />
                 <Step2UploadOverlay
                    currentStep={currentStep}
                />
                 <Step3PostHire
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    setOption={setOption}
                />
                 <Step4Consultant
                    currentStep={currentStep}
                    option={option}
                />
                 <Step5Project
                    currentStep={currentStep}
                    option={option}
                />
                 <Step6Finished
                    currentStep={currentStep}
                />
                 <Step7Profile
                    currentStep={currentStep}
                />
                {nextPage()}
                {submitButton()}
            </form>
        </>
    );
};

export default BusinessOnboarding;