import styled from "styled-components";
import { device } from "../../utils/mixin";
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DepartmentNotFound = styled.div`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
  padding-top: 20px;
`;

export const TableContainer = styled.table`
  width: 99%;
  border-collapse: collapse;
  margin-top: 60px;
`;

export const BodyContainer = styled.tbody`
  border-collapse: collapse;
  margin-top: 60px;
`;

export const TheadContainer = styled.thead`
  border-bottom: 3px solid #000;
`;

export const StyledTh = styled.th`
  font-size: 14px;
  padding: 20px;

  ${device.tablet} {
    font-size: 18px;
    padding: 20px;
  }
`;

export const StyledTd = styled.td`
  position: relative;
  font-size: 10px;
  border-bottom: 1px solid #b9b9b9;
  text-align: center;
  ${device.mobile} {
    font-size: 12px;
  }

  ${device.tablet} {
    font-size: 16px;
  }
`;

export const StyledTdWork = styled.td`
  padding: 20px;
  font-size: 16px;
  width: 16%;
  border-bottom: 1px solid #b9b9b9;
  text-align: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 5px;

  border-radius: ${({ isOpen }) => (isOpen ? "0 0 4px 4px" : "4px")};
  box-shadow: ${({ isOpen }) => (isOpen ? "0 2px 4px #9f9f9f" : "none")};
  background-color: #fff;
  padding-top: 30px;

  ${device.mobile} {
    padding-left: 5px;
    padding-right: 5px;
  }

  ${device.tablet} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListDepartmentItem = styled.li`
  margin-bottom: 10px;
`;

export const ListItem = styled.div`
  margin-bottom: 10px;
  font-size: 8px;
  ${device.mobile} {
    font-size: 12px;
  }

  ${device.tablet} {
    font-size: 14px;
  }

  ${device.desktop} {
    font-size: 18px;
  }
`;

export const ButtonDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: inherit;
  transition: transform 0.3s ease-in;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "none")};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ButtonUp = styled.button`
  position: fixed;
  bottom: 30px;
  right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border: none;
  background-color: #000;
  border-radius: 164.689px;
  color: #fff;
  padding: 5px;
  transition: background-color 0.5s ease-in;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ec1f2b;
  }

  ${device.tablet} {
    right: 220px;
    height: 35px;
    width: 35px;
  }

  ${device.desktop} {
    height: 45px;
    width: 45px;
    right: 250px;
  }
`;
