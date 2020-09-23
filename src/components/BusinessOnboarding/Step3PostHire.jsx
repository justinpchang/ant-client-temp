import React from 'react';

const Step3PostHire = (props) => {
    if(props.currentStep !== 3) {
        return null;
    }

    return (
        <p>Step 3 Post or Hire</p>
    );
};

export default Step3PostHire;