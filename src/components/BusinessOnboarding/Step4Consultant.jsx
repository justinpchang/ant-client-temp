import React from 'react';

const Step4Consultant = (props) => {
    if(props.currentStep !== 4) {
        return null;
    }
    if (props.option !== 'consultant') {
        return null;
    }

    return (
        <p>Step 4 Hire a Consultant</p>
    );
};

export default Step4Consultant;