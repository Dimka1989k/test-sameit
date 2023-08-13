import {
  InfoContainer,
  InfoContent,
  InfoCardInvoice,
  InfoCard,
} from "./InvoiceInfo.styled.jsx";

export const InvoiceInfo = () => {
  return (
    <InfoContainer>
      <InfoCard>
        <InfoContent>
          <InfoCardInvoice>Статус доставки:</InfoCardInvoice>
        </InfoContent>
        <InfoContent>
          Відправлено:
          <InfoCardInvoice>адреса</InfoCardInvoice>
        </InfoContent>
        <InfoContent>
          Отримано:
          <InfoCardInvoice>адреса</InfoCardInvoice>
        </InfoContent>
      </InfoCard>
    </InfoContainer>
  );
};
