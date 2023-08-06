import React from "react";
import { QuestionTitle } from "../styles/title";
import { Input } from "../styles/input";
import { QuestionContainer } from "../styles/container";
import { InputContainer } from "../styles/container";

const NameForm = ({ form, setForm }) => {
  const onChange = e => {
    e.preventDefault();
    setForm({
      ...form,
      name: {
        ...form.name,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <QuestionContainer>
      <QuestionTitle>¿Cuál es tu nombre?</QuestionTitle>
      <InputContainer>
        <Input className="form-control" type="text" name="firstName" placeholder="Nombre" onChange={onChange}></Input>
        <Input className="form-control" type="text" name="middleName" placeholder="Segundo nombre" onChange={onChange}></Input>
        <Input className="form-control" type="text" name="paternalLastName" placeholder="Apellido paterno" onChange={onChange}></Input>
        <Input className="form-control" type="text" name="maternalLastName" placeholder="Apellido materno" onChange={onChange}></Input>
      </InputContainer>
    </QuestionContainer>
  );
};

export default NameForm;
