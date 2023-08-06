import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DateOfBirthForm = ({ form, setForm }) => {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    if (date.day || date.month || date.year) {
      setForm({
        ...form,
        dateOfBirth: `${date.day} ${date.month} ${date.year}`,
      });
    }
  }, [date, setForm]);

  const onChange = e => {
    e.preventDefault();
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <DateOfBirthContainer>
        <DateOfBirthTitle>¿Cuál es tu fecha de nacimiento?</DateOfBirthTitle>
        <InputContainer>
          <Input className="form-control" type="number" name="day" value={date.day} placeholder="Día" onChange={onChange}></Input>
          <Input className="form-control" type="text" value={date.month} name="month" placeholder="Mes" onChange={onChange}></Input>
          <Input className="form-control" type="number" name="year" value={date.year} placeholder="Año" onChange={onChange}></Input>
        </InputContainer>
      </DateOfBirthContainer>
    </>
  );
};

export default DateOfBirthForm;

const DateOfBirthContainer = styled.div`
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

const DateOfBirthTitle = styled.h4`
  font-size: bold;
  padding-left: 0.938rem;
`;
