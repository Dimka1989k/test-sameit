import { SearchTTN } from "../../components/SearchTTN/SearchTTN";
import { InvoiceInfo } from "../../components/InvoiceInfo/InvoiceInfo";
import { History } from "../../components/History/History";
import { Loader } from "../../components/Loader/Loader";
import { Container } from "./CheckingTTN.styled.jsx";
import { selectIsLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";

const CheckingTTN = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <SearchTTN />
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            gap: "60px",
          }}
        >
          <Container>
            <InvoiceInfo />
            <History />
          </Container>
        </div>
      )}
    </>
  );
};

export default CheckingTTN;
