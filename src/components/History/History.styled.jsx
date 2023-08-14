import styled from "styled-components";
import { device } from "../../utils/mixin";

export const HistoryWrapper = styled.div`
  border: 1px solid #e8efef;
  border-radius: 30px;
  position: relative;
  margin-top: 60px;
  margin-bottom: 20px;
  margin-left: 0px;

  ${device.desktop} {
    margin-left: 60px;
  }
`;

export const HistoryHead = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: rgba(232, 239, 239, 0.3);
  border-radius: 20px;
  margin: 20px;
  height: 350px;
  max-width: 280px;
  position: relative;
  width: 300px;
`;

export const ListHistoty = styled.ul`
  display: flex;
  align-items: center;
  width: 320px;
  list-style: none;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  height: 230px;
  margin-top: 10px;
  overflow-y: ${(props) => {
    return props.requestHistory.length > 5 ? "scroll" : "hidden";
  }};
`;

export const Button = styled.button`
  position: absolute;
  bottom: 10px;
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
  margin-top: 10px;
`;

export const Conatiner = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
`;
