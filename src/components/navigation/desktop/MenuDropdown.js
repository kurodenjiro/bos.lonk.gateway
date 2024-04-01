import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDropdown = styled.div`
  button,

  .dropdown-toggle {
    color: #fff;
    font-size: 20px;
    font-family: Lakki Reddy,cursive;
    
    text-shadow: 0 4px 4px #00000040;
    text-transform: lowercase;
    margin-block-end: 0.33em;

    &:after {
      margin: 0 15px;
      border-top-color: var(--slate-dark-11);
    }

    img {
      border-radius: 50% !important;
    }

  }

  .dropdown-menu {
    border-radius: 10px; 
    position: absolute;
    top: 75px;
    left: 24px;
    z-index: 1000;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border: 1px solid #31cf34;
    }
    .dropdown-menu.show {
      display: block;
      }
    .dropdown li {
      margin-bottom: 0.7em;
    }
    .dropdown-item {
      font-size: 1.4rem;
      color: #31cf34;
      text-shadow: 0 3px 6px #00000040;
      font-family: Lakki Reddy,cursive;
    }
`;

export function MenuDropdown(props) {

  return (
    <>
      <StyledDropdown className="dropdown p-1 p-lg-3">
        <span
          className="dropdown-toggle"
          type="button"
          id="dropdownMenu2222"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          bridge to near
        </span>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenu2222"
          style={{ minWidth: "fit-content" }}
        >
          <li>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.etherum`}
            >
              from Ethereum
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.solana`}
            >
              from Solana
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from Arbitrum
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from Optimism
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from Polygon
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from Fantom
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from Avalance
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from BSC
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from SUI
            </NavLink>
            <NavLink
              className="dropdown-item"
              type="button"
              to={`/louisdevzz.near/widget/Lonk.evm`}
            >
              from Aptos
            </NavLink>
          </li>
        </ul>
      </StyledDropdown>
    </>
  );
}
