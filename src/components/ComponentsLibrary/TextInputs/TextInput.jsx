import React from 'react';

import { Container, StyledTextInput } from './TextInput.styles';
import { StyledLabel } from './Label.styles';

/*
  PROPS:
  value: string - updates with input value
  label?: string - text for label that appears above (default none)
  placeholder?: string - input placeholder text (default none)
  width?: int - specify width (defualt 300)
  height?: int - specify height (defualt 40)
  disabled?: boolean - disables the input (default false)
  error?: boolean - adds error styles when true (default false)
  validated?: boolean - adds validatated styles when true (default false)
    has precedence over error
  footnote?: string - text for label that appears below (default none)
    only appears when error/validated is true
 */

const TextInput = (props) => {
  let disabled = (props.disabled || false) ? {'disabled': 'disabled'} : {};

  return (
    <>
      <Container
        width={props.width || 300}
      >
        {props.label && (
          <StyledLabel height={props.height || 40}>{props.label}</StyledLabel>
        )}
        <StyledTextInput
          value={props.value}
          placeholder={props.placeholder || ""}
          width={props.width || 300}
          height={props.height || 40}
          {...disabled}
          error={props.error || false}
          validated={props.validated || false}
        />
        {props.footnote && (
          props.error ? (
            <StyledLabel height={props.height || 40} footnote error>{props.footnote}</StyledLabel>
          ) : (props.validated && (
            <StyledLabel height={props.height || 40} footnote validated>{props.footnote}</StyledLabel>
          ))
        )}
      </Container>
    </>
  );
};

export default TextInput;