import React from 'react';

const Step6Finished = (props) => {
    if(props.currentStep !== 6) {
        return null;
    }

    return (
        <p>Step 6 Finish page</p>
    );
};

export default Step6Finished;