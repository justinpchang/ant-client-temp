import React from 'react';

const Step5WorkExp = (props) => {
    if(props.currentStep !== 5) {
        return null;
    }

    return (
        <>
            <p>Step 5 Work Experience setup</p>
        </>
    );
};

export default Step5WorkExp;