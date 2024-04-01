import React from "react";
import styled from "styled-components";
export function Logotype({ color = "white" }) {
  const StyledLogo = styled.div`
  margin-left:20px;
  @media (max-width: 768px) { 
    .logo{
        display:flex;
        flex-direction:row;
        align-items:start;
        justify-content:start;
    }
}
`;
  return (
    <StyledLogo class="col-lg-3 justify-content-start align-items-start">
      <a class="text-decoration-none logo">
        <img src="https://bafybeibuj22kfgmevy3os6akrswxosjyjv5q6tecyv5jsfpw7iccajp5qa.ipfs.nftstorage.link/" alt="Icon" width="70" height="70" />
        <img src="https://bafkreidzrna3q6csqykuvzih6yywrijmdg4fn4tb53azjmmjuobfus4v2e.ipfs.nftstorage.link/" alt="Logo" width="141" height="60" />
      </a>
    </StyledLogo>
  );
}
