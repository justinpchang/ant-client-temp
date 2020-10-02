import React from 'react';
import { Link } from 'react-router-dom';

import {
    Dropdown
} from '../ComponentsLibrary/Dropdowns';

import './TestingCanvas.css';

const dummyData = [
    {
        id: 0,
        month: 'June'
    },
    {
        id: 1,
        month: 'July'
    },
    {
        id: 2,
        month: 'August'
    },
]
const dummyHeader = 'Choose a month...'


const Test = () => {

    return (
        <>
            <Link to="/home">Home</Link>
            <div className="testRow">
                {/* Default Component Library */}
                <Dropdown optionsData={dummyData} header={dummyHeader} />
            </div>

            <div className="testRow">
                {/* Figma Design examples */}
                <Dropdown inactive optionsData={dummyData} header={dummyHeader} />
            </div>
        </>
    );
};

export default Test;