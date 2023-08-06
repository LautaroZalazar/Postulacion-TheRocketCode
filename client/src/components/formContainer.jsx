import React, { useEffect } from "react";
import { useState } from "react";
import ContactForm from "./contactForm";
import NameForm from "./nameForm";
import DateOfBirthForm from "./dateOfBirthForm";
import axios from "axios";
import ShowSession from "./showSession";
import styled from "styled-components";
import userIcon from "../assets/userIcon.png";

const FormContainer = () => {
  const [form, setForm] = useState({
    name: {
      firstName: "",
      middleName: "",
      paternalLastName: "",
      maternalLastName: "",
    },
    dateOfBirth: "",
    contact: {
      cellphone: "",
      email: "",
    },
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = async e => {
    try {
      e.preventDefault();
      const formattedForm = {
        firstName: form.name.firstName,
        middleName: form.name.middleName,
        paternalLastName: form.name.paternalLastName,
        maternalLastName: form.name.maternalLastName,
        dateOfBirth: form.dateOfBirth,
        email: form.contact.email,
        cellphone: form.contact.cellphone,
      };
      const res = (await axios.post("http://localhost:8080/api/user", formattedForm)).data;
      if (res.status === "Success") {
        setSuccess(true);
        const userString = JSON.stringify(res.payload);
        sessionStorage.setItem("user", userString);
      }
    } catch (error) {
      alert("Ocurrió un error, por favor intentar más tarde");
    }
  };

  return (
    <>
      <H1>Registrate!</H1>
      <CardContainer>
        <Form onSubmit={onSubmit}>
          <UserInfo>
            <UserImg src={userIcon}></UserImg>
            <NameForm form={form} setForm={setForm} />
          </UserInfo>
          {(form.name.firstName || form.name.middleName || form.name.paternalLastName || form.name.maternalLastName) && (
            <NameSpan>
              Nombre:
              {`${form.name.firstName} ${form.name.middleName} ${form.name.paternalLastName} ${form.name.maternalLastName}`}
            </NameSpan>
          )}
          <UserInfo>
            <UserImg src={userIcon}></UserImg>
            <DateOfBirthForm form={form} setForm={setForm} />
          </UserInfo>
          {form.dateOfBirth && <NameSpan>Fecha de nacimiento: {form.dateOfBirth}</NameSpan>}
          <UserInfo>
            <UserImg src={userIcon}></UserImg>
            <ContactForm form={form} setForm={setForm} />
          </UserInfo>
          {(form.contact.email || form.contact.cellphone) && (
            <ContactSpanContainer>
              {form.contact.email && <ContactSpan>Correo electrónico: {form.contact.email}</ContactSpan>}
              {form.contact.cellphone && <ContactSpan> Teléfono: {form.contact.cellphone}</ContactSpan>}
            </ContactSpanContainer>
          )}
          <Button type="submit">Iniciar</Button>
        </Form>
      </CardContainer>
      {success && <ShowSession />}
    </>
  );
};

export default FormContainer;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const H1 = styled.h1`
  text-align: center;
`;

const ContactSpan = styled.span`
  width: 100%;
`;

const ContactSpanContainer = styled.div`
  display: flex;
  background-color: #f174dc;
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 3px;
  width: 90%;
  flex-direction: column;
`;

const NameSpan = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 2rem;
  background-color: #f174dc;
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 3px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`;

const Button = styled.button`
  background-color: #f93e83;
  color: #ffffff;
  width: 80%;
  height: 2.75rem;
  border-radius: 3px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const UserImg = styled.img`
  width: 15%;
  height: 15%;
  margin-right: 5%;
`;

const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  padding: 32px 42px;
  margin: 0px auto;
  @media (min-width: 1280px) {
    max-width: 40%;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: 10px;
  margin-top: 10px;
`;
