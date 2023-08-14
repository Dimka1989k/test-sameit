import styled from "styled-components";

import { device } from "../../utils/mixin";

import { Form, Field, ErrorMessage } from "formik";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f1f1f1;
`;

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

  outline: none;
  border-radius: 5px;

  ::placeholder {
    padding-left: 10px;
  }

  ${device.tablet} {
    width: 350px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 16px;

  border: none;
  background-color: #000;
  border-radius: 164.689px;
  color: #fff;
  padding: 16px 36px;
  transition: background-color 0.5s ease-in;
  cursor: pointer;
  margin-top: 20px;

  &:hover,
  &:focus {
    background-color: #ec1f2b;
  }
`;

export const ErrorMessageDepartment = styled(ErrorMessage)`
  width: 280px;
  text-align: start;
  color: #ec1f2b;
  font-weight: 400;
  font-size: 10px;
  margin-top: 4px;
`;
