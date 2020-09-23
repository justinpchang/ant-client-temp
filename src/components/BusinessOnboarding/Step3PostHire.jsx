import React from 'react';

const Step3PostHire = (props) => {
    if(props.currentStep !== 3) {
        return null;
    }

    const handleOption = (e) => {
        e.preventDefault();
        props.setOption(e.target.value)
        let step = e.target.value === 'consultant' ? 4 : 5
        props.setCurrentStep(step)
    };

    return (
        <>
            <p>Step 3 Post or Hire</p>
            <button value="consultant" onClick={handleOption}>
                Hire Consultant
            </button>
            <button value="project" onClick={handleOption}>
                Post Project
            </button>
        </>
    );
};

export default Step3PostHire;