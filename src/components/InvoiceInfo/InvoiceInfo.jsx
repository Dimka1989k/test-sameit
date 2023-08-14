import {
  InfoContainer,
  InfoContent,
  InfoCardInvoice,
  InfoCard,
  InfoContentStatus,
  Parafraph,
} from "./InvoiceInfo.styled.jsx";

import { useSelector } from "react-redux";
import { selectInfo } from "../../redux/selectors";

export const InvoiceInfo = () => {
  const cargoInfo = useSelector(selectInfo);

  const {
    Status,
    StatusCode,
    WarehouseRecipient,
    WarehouseSender,
    CitySender,
    CityRecipient,
  } = cargoInfo;
  return (
    <InfoContainer>
      <InfoCard>
        <InfoContentStatus>
          <Parafraph>Статус доставки:</Parafraph>
          {StatusCode === "3" ? (
            <InfoCardInvoice>
              Номер накладної не знайдено. Перевірте номер та спробуйте ще раз
            </InfoCardInvoice>
          ) : (
            <InfoCardInvoice>{Status}</InfoCardInvoice>
          )}
        </InfoContentStatus>
        <InfoContent>
          <Parafraph>Відправлено:</Parafraph>
          <InfoCardInvoice>Місто: {CitySender}</InfoCardInvoice>
          {WarehouseSender}
        </InfoContent>
        <InfoContent>
          <Parafraph>Отримано:</Parafraph>
          <InfoCardInvoice>Місто: {CityRecipient}</InfoCardInvoice>
          {WarehouseRecipient}
        </InfoContent>
      </InfoCard>
    </InfoContainer>
  );
};
