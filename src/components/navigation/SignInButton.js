import React from "react";
import { LonkBorderButton } from "../common/buttons/LonkBorderButton";

export function SignInButton(props) {
  return (
    <LonkBorderButton className="nav-sign-in-btn" onClick={props.onSignIn}>
      Sign In
    </LonkBorderButton>
  );
}
