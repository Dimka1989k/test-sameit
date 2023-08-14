import { BallTriangle } from "react-loader-spinner";
import { Spinner } from "./Loader.styled.jsx";
export const Loader = () => {
  return (
    <Spinner>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="red"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Spinner>
  );
};
