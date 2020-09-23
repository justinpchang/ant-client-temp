import React from 'react';

const Step7Project = (props) => {
    if(props.currentStep !== 7) {
        return null;
    }

    return (
        <>
            <p>Step 7 Upload Past Projects</p>
        </>
    );
};

export default Step7Project;