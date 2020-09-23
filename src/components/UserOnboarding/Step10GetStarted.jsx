import React from 'react';

const Step10GetStarted = (props) => {
    if(props.currentStep !== 10) {
        return null;
    }

    return (
        <>
            <p>Step 10 Get Started page</p>
        </>
    );
};

export default Step10GetStarted;