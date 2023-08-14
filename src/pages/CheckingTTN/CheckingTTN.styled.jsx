import styled from "styled-components";
import { device } from "../../utils/mixin";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${device.desktop} {
    flex-direction: row;
  }
`;
