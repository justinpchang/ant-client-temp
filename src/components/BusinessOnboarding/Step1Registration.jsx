import React from 'react';

const Step1Registration = (props) => {
    if(props.currentStep !== 1) {
        return null;
    }

    return (
        <p>Step 1 Registration</p>
    );
};

export default Step1Registration;