import React from "react";
import { Link } from "react-router-dom";

import { BlueBtn, WhiteBtn, SecondaryBtn } from "../ComponentsLibrary/Buttons";
import { TextInput, Label } from '../ComponentsLibrary/TextInputs';

import "./TestingCanvas.css";

const Test = () => {
  return (
    <>
      <Link to="/home">Home</Link>
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
        {/* implementing buttons to match figma designs */}
        <BlueBtn>Next</BlueBtn>
        <BlueBtn>Get started</BlueBtn>
        <BlueBtn size={10}>Sign up</BlueBtn>
        <BlueBtn size={10}>Sign in</BlueBtn>
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
        <TextInput placeholder="Error" error={true} />
        <TextInput placeholder="Validated" validated={true} />
        <TextInput placeholder="Disabled" disabled={true} />
      </div>
    </>
  );
};

export default Test;
