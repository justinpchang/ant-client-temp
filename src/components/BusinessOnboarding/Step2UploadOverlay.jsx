import React from 'react';

const Step2UploadOverlay = (props) => {
    if(props.currentStep !== 2) {
        return null;
    }

    return (
        <p>Step 2 Upload Overlay</p>
    );
};

export default Step2UploadOverlay;