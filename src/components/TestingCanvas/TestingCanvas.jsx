import React from "react";
import { Link } from "react-router-dom";

import { BlueBtn, WhiteBtn, SecondaryBtn } from "../ComponentsLibrary/Buttons";
import { TextInput } from '../ComponentsLibrary/TextInputs';

import "./TestingCanvas.css";

const Test = () => {
  return (
    <>
      <Link to="/home">Home</Link>

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
