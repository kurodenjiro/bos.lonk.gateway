import React from "react";
import styled from "styled-components";

const StyledMobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-bold);

  color: #fff;
  font-size: 20px;
  font-family: Lakki Reddy,cursive;
  
  text-shadow: 0 4px 4px #00000040;
  text-transform: lowercase;

  
  .menu {
    width: 18px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 10px;

    div {
      background-color: white;
      height: 2px;
      width: 100%;
      border-radius: 30px;
    }
  }
`;

export function MobileMenuButton(props) {
  return (
    <StyledMobileMenuButton onClick={props.onClick}>
      <div className="menu">
        <div />
        <div />
        <div />
      </div>
      {props.currentPage}
    </StyledMobileMenuButton>
  );
}
