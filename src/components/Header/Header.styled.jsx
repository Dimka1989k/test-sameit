import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin-top: 40px;
  height: 64px;
  line-height: 36px;
  background-color: #f1f1f1;
  border-top: 10px solid #ff392e;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 2px #b9b9b9;
  text-align: center;
`;

export const PostNavLink = styled(NavLink)`
  color: #212121;
  font-size: 22px;
  height: auto;
  width: 100%;
  transition: color 0.2s ease-in-out, box-shadow 0.5s ease-in-out;

  &.active {
    color: red;
    box-shadow: 0px 1px 2px 1px#b9b9b9;
    border-radius: 5px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    box-shadow: 0px 1px 2px 1px#b9b9b9;
    border-radius: 5px;
  }
`;
