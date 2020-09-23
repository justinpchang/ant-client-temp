import React from 'react';

const Step9Finished = (props) => {
    if(props.currentStep !== 9) {
        return null;
    }

    return (
        <>
            <p>Step 9 Finished Page</p>
        </>
    );
};

export default Step9Finished;