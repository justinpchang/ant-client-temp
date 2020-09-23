import React from 'react';

const Step8UploadOverlay = (props) => {
    if(props.currentStep !== 8) {
        return null;
    }

    return (
        <>
            <p>Step 8 Upload Overlay</p>
        </>
    );
};

export default Step8UploadOverlay;