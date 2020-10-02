import React from 'react';

import { StyledLabel } from './Label.styles';

/*
  PROPS:
  children: string - text to be displayed
  height: int - height of input
  footnote?: boolean - styles smaller and below input
  error/validated?: boolean - colors footnote
    required if footnote attribute is passed
 */
const Label = (props) => {
  return (
    <>
      <StyledLabel height={props.height || 300}>
        {props.children}
      </StyledLabel>
    </>
  )
};

export default Label;