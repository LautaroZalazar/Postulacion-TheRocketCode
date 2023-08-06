import React from "react";
import styled from "styled-components";

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
      <ContactContainer>
        <ContactTitle>Datos de contacto</ContactTitle>
        <InputContainer>
          <Input className="form-control" type="email" name="email" placeholder="Correo electrónico" onChange={onChange}></Input>
          <Input className="form-control" type="number" name="cellphone" placeholder="Telefono celular" onChange={onChange}></Input>
        </InputContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm;

const ContactContainer = styled.div`
  background-color: #f0f0f0;
  margin-bottom: 20px;
  width: 80%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 5px 0;
`;

const Input = styled.input`
  width: 90%;
  height: 2rem;
  background-color: #f0f0f0;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 0px 0px 0px 5px;
`;

const ContactTitle = styled.h4`
  font-size: bold;
  padding-left: 0.938rem;
`;
