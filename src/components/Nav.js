import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring";

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
  color: white;
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
          <span role="img" aria-label="ruler-emoji">
            📏
          </span>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => <div style={props}>Window Dimensions</div>}
          </Spring>
          <span role="img" aria-label="ruler-emoji">
            📏
          </span>
        </NavText>
      </NavContainer>
    </NavBar>
  </>
);

export default Nav;
