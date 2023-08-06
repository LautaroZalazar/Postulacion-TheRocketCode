import React, { useState, useEffect } from "react";
import { QuestionTitle } from "../styles/title";
import { Input } from "../styles/input";
import { QuestionContainer } from "../styles/container";
import { InputContainer } from "../styles/container";

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
      <QuestionContainer>
        <QuestionTitle>¿Cuál es tu fecha de nacimiento?</QuestionTitle>
        <InputContainer>
          <Input className="form-control" type="number" name="day" value={date.day} placeholder="Día" onChange={onChange}></Input>
          <Input className="form-control" type="text" name="month" value={date.month} placeholder="Mes" onChange={onChange}></Input>
          <Input className="form-control" type="number" name="year" value={date.year} placeholder="Año" onChange={onChange}></Input>
        </InputContainer>
      </QuestionContainer>
    </>
  );
};

export default DateOfBirthForm;
