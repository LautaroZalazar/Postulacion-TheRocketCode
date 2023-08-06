import React from "react";
import { useState } from "react";
import ContactForm from "./contactForm";
import NameForm from "./nameForm";
import DateOfBirthForm from "./dateOfBirthForm";
import axios from "axios";
import ShowSession from "./showSession";
import userIcon from "../assets/userIcon.png";
import { ContactSpanContainer, CardContainer, ChatContainer } from "../styles/container";
import { Button } from "../styles/button";
import { H1 } from "../styles/title";
import { ContactSpan, NameSpan } from "../styles/span";
import { UserImg } from "../styles/image";
import { Form } from "../styles/form";

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
          <ChatContainer>
            <UserImg src={userIcon}></UserImg>
            <NameForm form={form} setForm={setForm} />
          </ChatContainer>
          {(form.name.firstName || form.name.middleName || form.name.paternalLastName || form.name.maternalLastName) && (
            <NameSpan>
              Nombre:
              {`${form.name.firstName} ${form.name.middleName} ${form.name.paternalLastName} ${form.name.maternalLastName}`}
            </NameSpan>
          )}
          <ChatContainer>
            <UserImg src={userIcon}></UserImg>
            <DateOfBirthForm form={form} setForm={setForm} />
          </ChatContainer>
          {form.dateOfBirth && <NameSpan>Fecha de nacimiento: {form.dateOfBirth}</NameSpan>}
          <ChatContainer>
            <UserImg src={userIcon}></UserImg>
            <ContactForm form={form} setForm={setForm} />
          </ChatContainer>
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
