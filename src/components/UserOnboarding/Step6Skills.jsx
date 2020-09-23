import React from 'react';

const Step6Skills = (props) => {
    if(props.currentStep !== 6) {
        return null;
    }

    return (
        <>
            <p>Step 6 Skills setup</p>
        </>
    );
};

export default Step6Skills;