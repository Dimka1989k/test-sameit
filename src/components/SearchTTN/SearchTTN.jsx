import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "../../redux/operations";
import { selectError, selectSelectedNumber } from "../../redux/selectors";
import * as yup from "yup";
import { useEffect } from "react";

import {
  FormContainer,
  Input,
  Button,
  Error,
  InfoError,
  ContainerInput,
} from "./SearchTTN.styled.jsx";

import { Formik, useFormikContext } from "formik";

const schema = yup.object().shape({
  ttnNumber: yup
    .string()
    .matches(/^\d{14}$/, "Введіть номер накладної (14-симфолів)")
    .required("Обов'язково для заповнення"),
});

const initialValues = {
  ttnNumber: "",
};

const InputSearch = () => {
  const { setFieldValue } = useFormikContext();

  const ttnSelectedNumber = useSelector(selectSelectedNumber);

  useEffect(() => {
    setFieldValue("ttnNumber", ttnSelectedNumber);
  }, [ttnSelectedNumber, setFieldValue]);

  return (
    <>
      <Input
        type="text"
        name="ttnNumber"
        placeholder="Введіть номер накладної"
      />
      <Error name="ttnNumber" component="div" />
    </>
  );
};

export const SearchTTN = () => {
  const dispatch = useDispatch();
  let error = useSelector(selectError);

  const handleSubmit = (values) => {
    dispatch(fetchInfo(values.ttnNumber));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <ContainerInput>
          <InputSearch />
        </ContainerInput>

        <Button type="submit">Get status TTN</Button>
        <InfoError error={error}>Невірний номер накладної</InfoError>
      </FormContainer>
    </Formik>
  );
};
