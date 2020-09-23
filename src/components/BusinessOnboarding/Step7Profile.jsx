import React from 'react';

const Step7Profile = (props) => {
    if(props.currentStep !== 7) {
        return null;
    }

    return (
        <p>Step 7 Company Profile</p>
    );
};

export default Step7Profile;