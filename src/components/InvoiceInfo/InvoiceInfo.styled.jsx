import styled from "styled-components";
import { device } from "../../utils/mixin";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e8efef;
  border-radius: 30px;
  max-width: 758px;
  position: relative;
  max-width: 310px;

  margin-top: 60px;

  ${device.tablet} {
    max-width: 500px;
  }
  ${device.desktop} {
    max-width: 640px;
  }
`;

export const InfoCard = styled.div`
  background: rgba(232, 239, 239, 0.3);
  border-radius: 20px;
  margin: 20px;
  padding: 10px 20px 30px;
  max-width: 450px;
  position: relative;
  ${device.tablet} {
    padding: 40px 48px 60px;
    width: 600px;
  }

  ${device.desktop} {
    max-width: 705px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 20px;

  :last-child {
    margin-bottom: 0px;
  }
`;

export const InfoContentStatus = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
`;

export const InfoCardInvoice = styled.p`
  margin-left: 0px;

  :first-child {
    margin-left: 5px;
  }
`;

export const Parafraph = styled.p`
  font-weight: 600;
  margin-right: 5px;
`;
