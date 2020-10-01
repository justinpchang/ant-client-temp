import React from 'react';

import {
    BlueBtn,
    WhiteBtn,
    SecondaryBtn,
} from '../ComponentsLibrary/Buttons';



const Test = () => {


    return (
        <>
            <div className="testDiv">
                <BlueBtn>Button</BlueBtn>
                <WhiteBtn>Button</WhiteBtn>
                <SecondaryBtn>Button</SecondaryBtn>
                <WhiteBtn inactive>Button</WhiteBtn>
                <BlueBtn icon>Button</BlueBtn>
                <WhiteBtn icon>Button</WhiteBtn>
                <SecondaryBtn icon>Button</SecondaryBtn>
                <WhiteBtn icon inactive>Button</WhiteBtn>
            </div>
        </>
    );
};

export default Test;