import React from 'react';
import { Link } from 'react-router-dom';

import Step1SignUp from './Step1SignUp';
import Step2Profile from './Step2Profile';
import Step3Resume from './Step3Resume';
import Step4ProfilePhoto from './Step4ProfilePhoto';
import Step5WorkExp from './Step5WorkExp';
import Step6Skills from './Step6Skills';
import Step7Projects from './Step7Projects';
// Need to figure out how to use Step 8 as a utility component to resuse for business onboarding
import Step9Finished from './Step9Finished';
import Step10GetStarted from './Step10GetStarted';

const UserOnboarding = () => {

    return (
        <>
            <p>This is the User Flow Onboarding page</p>
            <Link to="/home">Back to Home</Link>
        </>
    );
};

export default UserOnboarding;