import React from "react";
import styled from "styled-components";

const ShowSession = () => {
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  return (
    <Session>
      <Span>Fecha de nacimiento: {user.dateOfBirth}</Span>
      <Span>Correo electrónico: {user.email}</Span>
      <Span>Teléfono: {user.cellphone}</Span>
      <Span>
        Nombre: {user.firstName} {user.middleName} {user.paternalLastName} {user.maternalLastName}
      </Span>
    </Session>
  );
};

export default ShowSession;

const Session = styled.div`
  padding: 8px;
  background-color: #f174dc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 3px;
  width: 80%;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 1280px) {
    max-width: 38.3%;
  }
`;

const Span = styled.span`
  display: block;
`;
