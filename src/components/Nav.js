import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background: #111;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: -80px;
`;
const NavText = styled.h1`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f88893;
  span {
    padding: 8px;
    display: none;
  }
`;

const Nav = () => (
  <>
    <NavBar>
      <NavContainer>
        <NavText>
          <span role="img" aria-label="ruler">
            📏
          </span>
          Window Dimensions
          <span role="img" aria-label="ruler">
            📏
          </span>
        </NavText>
      </NavContainer>
    </NavBar>
  </>
);

export default Nav;
