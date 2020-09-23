import React from 'react';

const Step3Resume = (props) => {
    if(props.currentStep !== 3) {
        return null;
    }

    return (
        <>
            <p>Step 3 Upload Resume</p>
        </>
    );
};

export default Step3Resume;