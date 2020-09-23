import React from 'react';

const Step5Project = (props) => {
    if(props.currentStep !== 5) {
        return null;
    }
    if (props.option !== 'project') {
        return null;
    }

    return (
        <p>Step 5 Post a Project</p>
    );
};

export default Step5Project;