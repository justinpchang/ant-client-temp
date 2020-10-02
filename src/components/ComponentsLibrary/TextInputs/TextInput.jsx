import React from 'react';

import { Container, StyledTextInput } from './TextInput.styles';
import Label from './Label';

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
 */

const TextInput = (props) => {
  let disabled = (props.disabled || false) ? {'disabled': 'disabled'} : {};

  return (
    <>
      <Container
        width={props.width || 300}
      >
        {props.label && (
          <Label>{props.label}</Label>
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
      </Container>
    </>
  );
};

export default TextInput;