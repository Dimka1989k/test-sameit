import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import {
  FormContainer,
  Input,
  Button,
  ErrorMessageDepartment,
  ContainerInput,
} from "./SearchDepartment.styled.jsx";

import { Formik } from "formik";
import { useEffect } from "react";
import { selectCity } from "../../redux/selectors.js";
import { clearDepartmentsList, updateCity } from "../../redux/slice.js";
import { fetchDepartments } from "../../redux/operations.js";

const schema = yup.object().shape({
  cityName: yup
    .string()
    .min(3, "Мінімальна кількість символів - 3")
    .max(30, "Максимум кількість символів - 28")
    .matches(
      /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']*(-[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*( [А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*$/,
      "Введіть назву міста з великої літери"
    )
    .required("Обов'язково для заповнення"),
});

const initialValues = {
  cityName: "",
};

export const SearchDepartment = () => {
  const dispatch = useDispatch();

  const city = useSelector(selectCity);

  useEffect(() => {
    if (city) {
      dispatch(fetchDepartments({ city }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  useEffect(() => {
    return () => {
      dispatch(updateCity(""));
      dispatch(clearDepartmentsList());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (values) => {
    dispatch(updateCity(values.cityName));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <ContainerInput>
          <Input
            type="text"
            placeholder="Введіть назву міста"
            name="cityName"
          />
          <ErrorMessageDepartment name="cityName" component="div" />
        </ContainerInput>
        <Button type="submit">Шукати</Button>
      </FormContainer>
    </Formik>
  );
};
