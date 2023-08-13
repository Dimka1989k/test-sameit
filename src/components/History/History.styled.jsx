import styled from "styled-components";

export const HistoryWrapper = styled.div`
  border: 1px solid #e8efef;
  border-radius: 30px;
  max-width: 340px;
  position: relative;
  width: 340px;
  margin-top: 60px;
`;

export const HistoryHead = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: rgba(232, 239, 239, 0.3);
  border-radius: 20px;
  margin: 20px;
  height: 314px;
  max-width: 300px;
  position: relative;
  width: 300px;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  font-size: 16px;
  height: 45px;
  width: 160px;
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
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 10px;
`;
