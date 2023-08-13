import { SearchTTN } from "../../components/SearchTTN/SearchTTN";
import { InvoiceInfo } from "../../components/InvoiceInfo/InvoiceInfo";
import { History } from "../../components/History/History";

export const CheckingTTN = () => {
  return (
    <>
      <SearchTTN />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          gap: "60px",
        }}
      >
        <InvoiceInfo />
        <History />
      </div>
    </>
  );
};
