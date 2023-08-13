import {
  FormContainer,
  Input,
  Button,
  InputContainer,
} from "./SearchTTN.styled.jsx";

import { Formik } from "formik";

export const SearchTTN = () => {
  return (
    <Formik>
      <FormContainer>
        <InputContainer>
          <Input type="text" placeholder="Введіть номер накладної" />
        </InputContainer>
        <Button>Get status TTN</Button>
      </FormContainer>
    </Formik>
  );
};
