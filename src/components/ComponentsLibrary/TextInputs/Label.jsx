import React from 'react';

import { StyledLabel } from './Label.styles';

/*
  PROPS:
  children: string - text to be displayed
 */
const Label = (props) => {
  return (
    <>
      <StyledLabel>
        {props.children}
      </StyledLabel>
    </>
  )
};

export default Label;