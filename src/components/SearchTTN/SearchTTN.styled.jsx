import styled from "styled-components";
import { Form, Field } from "formik";

export const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 160px;
  background-color: #f1f1f1;
`;

export const InputContainer = styled.div``;

export const Input = styled(Field)`
  font-size: 16px;
  border: 1px solid #d3d3d3;
  border-bottom: 0;
  height: 52px;
  line-height: 22px;
  padding: 0 6px;
  font-size: 18px;
  color: #808080;
  float: left;
  width: 350px;
  outline: none;
  border-radius: 5px;
  margin-right: 40px;

  ::placeholder {
  }
`;

export const Button = styled.button`
  font-size: 16px;
  height: 45px;
  width: 160px;
  border: none;
  background-color: #000;
  border-radius: 164.689px;
  color: #fff;
  padding: 5px;
  transition: background-color 0.5s ease-in;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ec1f2b;
  }
`;
