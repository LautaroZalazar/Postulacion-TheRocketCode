import React from "react";
import { QuestionTitle } from "../styles/title";
import { Input } from "../styles/input";
import { QuestionContainer } from "../styles/container";
import { InputContainer } from "../styles/container";

const ContactForm = ({ form, setForm }) => {
  const onChange = e => {
    e.preventDefault();
    setForm({
      ...form,
      contact: {
        ...form.contact,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <>
      <QuestionContainer>
        <QuestionTitle>Datos de contacto</QuestionTitle>
        <InputContainer>
          <Input className="form-control" type="email" name="email" placeholder="Correo electrónico" onChange={onChange}></Input>
          <Input className="form-control" type="number" name="cellphone" placeholder="Telefono celular" onChange={onChange}></Input>
        </InputContainer>
      </QuestionContainer>
    </>
  );
};

export default ContactForm;
