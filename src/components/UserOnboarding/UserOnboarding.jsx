import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Step1SignUp from './Step1SignUp';
import Step2Profile from './Step2Profile';
import Step3Resume from './Step3Resume';
import Step4ProfilePhoto from './Step4ProfilePhoto';
import Step5WorkExp from './Step5WorkExp';
import Step6Skills from './Step6Skills';
import Step7Projects from './Step7Projects';
// Need to figure out how to use Step 8 as a utility component to resuse for business onboarding
import Step8UploadOverlay from './Step8UploadOverlay';
import Step9Finished from './Step9Finished';
import Step10GetStarted from './Step10GetStarted';

const UserOnboarding = (props) => {
    const [currentStep, setCurrentStep] = useState(1);

    const _next = () => {
        let step = currentStep >= 9 ? 10 : currentStep + 1;
        setCurrentStep(step)
    };

    const nextButton = () => {
        if (currentStep <= 9) {
            return (
                <button 
                    type='button'
                    onClick={_next}
                >
                    Next
                </button>
            );
        }
        return null;
    };

    const submitButton = () => {
        if(currentStep > 9) {
            return (
                <button
                    type="submit"
                    // onClick={handleSubmit}
                >
                    Submit
                </button>
            )
        }
        return null;
    }

    return (
        <>
            <p>This is the User Flow Onboarding page</p>
            <Link to="/home">Back to Home</Link>
            {nextButton()}
            <form>
                {submitButton()}
                <Step1SignUp
                    currentStep={currentStep}
                />
                <Step2Profile
                    currentStep={currentStep}
                />
                <Step3Resume
                    currentStep={currentStep}
                />
                <Step4ProfilePhoto
                    currentStep={currentStep}
                />
                <Step5WorkExp
                    currentStep={currentStep}
                />
                <Step6Skills
                    currentStep={currentStep}
                />
                <Step7Projects
                    currentStep={currentStep}
                />
                <Step8UploadOverlay
                    currentStep={currentStep}
                />
                <Step9Finished
                    currentStep={currentStep}
                />
                <Step10GetStarted
                    currentStep={currentStep}
                />
            </form>
        </>
    );
};

export default UserOnboarding;