import React from "react";
import { Link } from "react-router-dom";

import './TestingCanvas.css';

import { Dropdown } from '../ComponentsLibrary/Dropdowns';
import { BlueBtn, WhiteBtn, SecondaryBtn } from "../ComponentsLibrary/Buttons";
import { TextInput } from '../ComponentsLibrary/TextInputs';

const dummyData = [
  {
    id: 0,
    option: 'June'
  },
  {
    id: 1,
    option: 'July'
  },
  {
    id: 2,
    option: 'August'
  },
];

const Test = () => {

  return (
    <>
      <Link to="/home">Home</Link>

      <div className="testRow">
        {/* Default Component Library */}
        <Dropdown required label={"Graduation Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
        <Dropdown label={"Degree"} width={300} optionsData={dummyData} placeholder={"Bachelors"} />
        <Dropdown required label={"Start Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
        {/* Figma Design examples */}
        <Dropdown required label={"End Date"} size={200} inactive optionsData={dummyData} placeholder={"Month"} />
      </div>

      <div className="testRow">
        {/* defaults matching figma component library */}
        <BlueBtn>Button</BlueBtn>
        <BlueBtn size={10}>Button</BlueBtn>
        <WhiteBtn>Button</WhiteBtn>
        <SecondaryBtn>Button</SecondaryBtn>
        <WhiteBtn inactive>Button</WhiteBtn>
        <BlueBtn icon>Button</BlueBtn>
        <WhiteBtn icon>Button</WhiteBtn>
        <SecondaryBtn size={9.2} icon>
          Button
        </SecondaryBtn>
        <SecondaryBtn icon>Button</SecondaryBtn>
        <WhiteBtn icon inactive>
          Button
        </WhiteBtn>
      </div>

      <div className="testRow">
        {/* implementing text inputs */}
        <TextInput label="Normal label" placeholder="Normal" />
        <TextInput placeholder="Error" error={true} footnote="Error footnote" />
        <TextInput label="Validated label" placeholder="Validated" validated={true} footnote="Validated footnote" />
        <TextInput placeholder="Disabled" disabled={true} />
      </div>
    </>
  );
};

export default Test;
