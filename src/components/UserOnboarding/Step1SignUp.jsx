import React from 'react';

const Step1SignUp = (props) => {
    if(props.currentStep !== 1) {
        return null;
    }

    return (
        <>
            <p>Step 1 Initial Signup</p>
        </>
    );
};

export default Step1SignUp;