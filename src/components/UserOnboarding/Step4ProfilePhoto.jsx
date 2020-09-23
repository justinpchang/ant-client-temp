import React from 'react';

const Step4ProfilePhoto = (props) => {
    if(props.currentStep !== 4) {
        return null;
    }
    
    return (
        <>
            <p>Step 4 Upload Photo</p>
        </>
    );
};

export default Step4ProfilePhoto;