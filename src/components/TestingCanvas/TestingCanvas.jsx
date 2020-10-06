import React from "react";
import { Link } from "react-router-dom";

import './TestingCanvas.css';

import { Dropdown } from '../ComponentsLibrary/Dropdowns';
import { BlueBtn, WhiteBtn, SecondaryBtn } from "../ComponentsLibrary/Buttons";
import { TextInput } from '../ComponentsLibrary/TextInputs';
import { Grid, Content, Row, Column } from '../ComponentsLibrary/Layout';

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

      {/* USAGE 
        Grid: Wraps around Content, making Content flex and responsive, works with multiple Contents
        Content?: This is if your needing border around your Rows and Columns
        Row: This creates a row to put your Columns in
        Column: This creates a row/wrap for your divs inside the row
      */}

        <Grid>
            <Content width={700}>
              <Row>
                <Column layout={'spaceAround'}>
                  <BlueBtn width={120}>Sign up</BlueBtn>
                  <BlueBtn width={20}>Sign up</BlueBtn>
                </Column>
              </Row>
            </Content>

            <Content>
              <Row>
                <Column layout={'spaceAround'}>
                  <BlueBtn width={120}>Sign up</BlueBtn>
                  <BlueBtn width={20}>Sign up</BlueBtn>
                </Column>
              </Row>
            </Content>

            <Content>
              <Row>
                <Column layout={'spaceAround'}>
                  <BlueBtn>Next</BlueBtn>
                  <BlueBtn>Get started</BlueBtn>
                </Column>
              </Row>
            </Content>
        </Grid>

        <Grid>
          <Content>
            <Row>
              <Column layout={'spaceEvenly'}>
                <BlueBtn>Next</BlueBtn>
                <BlueBtn>Get started</BlueBtn>
              </Column>
            </Row>
          </Content>
        </Grid>

        <Grid>
          <Content width={1000}>
            <Row>
              <Column layout={'spaceAround'}>
                <Dropdown required label={"Graduation Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
                <Dropdown label={"Degree"} width={300} optionsData={dummyData} placeholder={"Bachelors"} />
                <Dropdown required label={"Start Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
                {/* Figma Design examples */}
              </Column>
            </Row>
          </Content>
        </Grid>

        <Grid>
          <Content width={600}>
            <Row>
              <Column layout={'spaceBetween'}>
                <Dropdown required label={"Graduation Date"} width={200} optionsData={dummyData} placeholder={"Month"} />
                <Dropdown label={"Degree"} width={300} optionsData={dummyData} placeholder={"Bachelors"} />
              </Column>
              <Column layout={'flexStart'}>
                <BlueBtn>Get started</BlueBtn>
              </Column>
            </Row>
          </Content>
        </Grid>
       
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
