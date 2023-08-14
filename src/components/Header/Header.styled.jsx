import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../utils/mixin";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 40px;
  height: 84px;
  line-height: 24px;
  background-color: #f1f1f1;
  border-top: 10px solid #ff392e;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 2px #b9b9b9;
  text-align: center;

  ${device.desktop} {
    height: 64px;
    line-height: 36px;
  }
`;

export const PostNavLink = styled(NavLink)`
  padding: 10px;
  color: #212121;
  font-size: 15px;
  height: 50px;
  width: 49vw;
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

  ${device.desktop} {
    font-size: 22px;
    height: auto;
    padding: 0px;
  }
`;
