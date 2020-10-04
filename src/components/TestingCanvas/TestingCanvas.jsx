import React from "react";
import { Link } from "react-router-dom";

import './TestingCanvas.css';

import { Dropdown } from '../ComponentsLibrary/Dropdowns';
import { BlueBtn, WhiteBtn, SecondaryBtn } from "../ComponentsLibrary/Buttons";
import { TextInput } from '../ComponentsLibrary/TextInputs';
import { Row, Column } from '../ComponentsLibrary/Layout';

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
        <Row>
          <Column layout={"spaceEvenly"}>
            <BlueBtn>Next</BlueBtn>
            <BlueBtn>Get started</BlueBtn>
            <BlueBtn width={120}>Sign up</BlueBtn>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
          <Column layout={"spaceAround"}>
            <BlueBtn>Next</BlueBtn>
            <BlueBtn>Get started</BlueBtn>
            <BlueBtn width={120}>Sign up</BlueBtn>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
          <Column layout={"spaceEvenly"}>
            <Dropdown required label={"Graduation Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
            <Dropdown label={"Degree"} width={300} optionsData={dummyData} placeholder={"Bachelors"} />
            <Dropdown required label={"Start Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
            {/* Figma Design examples */}
            <Dropdown required label={"End Date"} size={200} inactive optionsData={dummyData} placeholder={"Month"} />
          </Column>
        </Row>
        <Row>
          <Column layout={"spaceEvenly"}>
            <BlueBtn>Next</BlueBtn>
            <BlueBtn>Get started</BlueBtn>
            <BlueBtn width={120}>Sign up</BlueBtn>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
          <Column layout={"spaceAround"}>
            <BlueBtn>Next</BlueBtn>
            <BlueBtn>Get started</BlueBtn>
            <BlueBtn width={120}>Sign up</BlueBtn>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
          <Column layout={"spaceEvenly"}>
            <Dropdown required label={"Graduation Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
            <Dropdown label={"Degree"} width={300} optionsData={dummyData} placeholder={"Bachelors"} />
            <Dropdown required label={"Start Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
            {/* Figma Design examples */}
            <Dropdown required label={"End Date"} size={200} inactive optionsData={dummyData} placeholder={"Month"} />
          </Column>
          <Column layout={"spaceAround"}>
            <BlueBtn>Next</BlueBtn>
            <BlueBtn>Get started</BlueBtn>
            <BlueBtn width={120}>Sign up</BlueBtn>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
          <Column layout={"flexEnd"}>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
          <Column layout={"flexStart"}>
            <BlueBtn width={120}>Sign in</BlueBtn>
          </Column>
        </Row>
      </div>

      <div className="testRow">
        {/* Default Component Library */}
        <Dropdown required label={"Graduation Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
        <Dropdown label={"Degree"} width={300} optionsData={dummyData} placeholder={"Bachelors"} />
        <Dropdown required label={"Start Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
        {/* Figma Design examples */}
        <Dropdown required label={"End Date"} size={200} inactive optionsData={dummyData} placeholder={"Month"} />
      </div>

      <div className="testRow">
        {/* implementing buttons to match figma designs */}
        <BlueBtn>Next</BlueBtn>
        <BlueBtn>Get started</BlueBtn>
        <BlueBtn width={120}>Sign up</BlueBtn>
        <BlueBtn width={120}>Sign in</BlueBtn>
        <SecondaryBtn>Upload</SecondaryBtn>
        <SecondaryBtn>Upload a file</SecondaryBtn>
        <SecondaryBtn icon>Add new education</SecondaryBtn>
        <SecondaryBtn icon>Add new experience</SecondaryBtn>
        <SecondaryBtn>Back</SecondaryBtn>
        <WhiteBtn icon inactive>
          Add new experience
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
