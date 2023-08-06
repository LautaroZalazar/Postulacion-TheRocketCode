import React from "react";
import { SessionContainer } from "../styles/container";
import { SessionSpan } from "../styles/span";

const ShowSession = () => {
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  return (
    <SessionContainer>
      <SessionSpan>Fecha de nacimiento: {user.dateOfBirth}</SessionSpan>
      <SessionSpan>Correo electrónico: {user.email}</SessionSpan>
      <SessionSpan>Teléfono: {user.cellphone}</SessionSpan>
      <SessionSpan>
        Nombre: {user.firstName} {user.middleName} {user.paternalLastName} {user.maternalLastName}
      </SessionSpan>
    </SessionContainer>
  );
};

export default ShowSession;
