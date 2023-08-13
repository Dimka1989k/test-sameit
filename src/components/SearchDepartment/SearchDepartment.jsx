import {
  FormContainer,
  Input,
  Button,
  InputContainer,
} from "./SearchDepartment.styled.jsx";

import { Formik } from "formik";

export const SearchDepartment = () => {
  return (
    <Formik>
      <FormContainer>
        <InputContainer>
          <Input type="text" placeholder="Введіть назву міста" />
        </InputContainer>
        <Button>Шукати</Button>
      </FormContainer>
    </Formik>
  );
};
