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

    const _next = () => {
        let step = currentStep >= 6 ? 7 : currentStep + 1;
        setCurrentStep(step);
    }

    const nextPage = () => {
        if(currentStep <= 6) {
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
                />
                 <Step4Consultant
                    currentStep={currentStep}
                />
                 <Step5Project
                    currentStep={currentStep}
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