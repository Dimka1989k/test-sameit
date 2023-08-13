import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
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
  font-size: 18px;
  padding: 20px;
`;

export const StyledTd = styled.td`
  position: relative;
  padding: 40px;
  font-size: 16px;
  border-bottom: 1px solid #b9b9b9;
  text-align: center;
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
  top: 580px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 200px;
  border-radius: ${({ isOpen }) => (isOpen ? "0 0 4px 4px" : "4px")};
  box-shadow: ${({ isOpen }) => (isOpen ? "0 2px 4px #9f9f9f" : "none")};
  background-color: #fff;
  padding-top: 20px;
  transition: border-radius 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    max-height 1s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "48px")};
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const ButtonDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: inherit;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "none")};
  margin-bottom: 10px;
`;
