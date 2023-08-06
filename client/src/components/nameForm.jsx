import React from "react";
import styled from "styled-components";
import userIcon from "../assets/userIcon.png";

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
    <>
      <NameContainer>
        <NameTitle>¿Cuál es tu nombre?</NameTitle>
        <InputContainer>
          <Input className="form-control" type="text" name="firstName" placeholder="Nombre" onChange={onChange}></Input>
          <Input className="form-control" type="text" name="middleName" placeholder="Segundo nombre" onChange={onChange}></Input>
          <Input className="form-control" type="text" name="paternalLastName" placeholder="Apellido paterno" onChange={onChange}></Input>
          <Input className="form-control" type="text" name="maternalLastName" placeholder="Apellido materno" onChange={onChange}></Input>
        </InputContainer>
      </NameContainer>
    </>
  );
};

export default NameForm;

const NameContainer = styled.div`
  background-color: #f0f0f0;
  margin-bottom: 20px;
  width: 80%;
`;

const UserImg = styled.img`
  width: 18%;
  height: 18%;
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

const NameTitle = styled.h4`
  font-size: bold;
  padding-left: 0.938rem;
`;
