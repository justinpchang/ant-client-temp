import React from 'react';

const Step2Profile = (props) => {
    if(props.currentStep !== 2) {
        return null;
    }

    return (
        <>
            <p>Step 2 Profile setup</p>
        </>
    );
};

export default Step2Profile;