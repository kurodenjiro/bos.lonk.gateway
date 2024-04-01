import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-size:20px;
  font-family:Lakki Reddy,cursive;
  background-color: #31cf34;
  border-color: #fff;
  color: white;

  text-shadow: 0 4px 4px #00000040;
  text-transform: lowercase;
  margin-block-end: 0.33em;
`;

export function LonkBorderButton(props) {
    return <StyledButton {...props}>{props.children}</StyledButton>;
}
