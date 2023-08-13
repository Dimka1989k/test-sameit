import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e8efef;
  border-radius: 30px;

  max-width: 758px;
  position: relative;
  width: 758px;
  margin-top: 60px;
`;

export const InfoCard = styled.div`
  background: rgba(232, 239, 239, 0.3);
  border-radius: 20px;
  margin: 20px;
  padding: 40px 48px 60px;
  max-width: 705px;
  position: relative;
  width: 705px;
`;
export const InfoContent = styled.div`
  display: flex;
  margin-bottom: 80px;

  :last-child {
    margin-bottom: 0px;
  }
`;

export const InfoCardInvoice = styled.div``;
