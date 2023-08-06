import styled from "styled-components";

export const ContactSpanContainer = styled.div`
  display: flex;
  background-color: #f174dc;
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 3px;
  width: 90%;
  flex-direction: column;
`;

export const CardContainer = styled.div`
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

export const ChatContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const QuestionContainer = styled.div`
  background-color: #f0f0f0;
  margin-bottom: 20px;
  width: 80%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 5px 0;
`;

export const SessionContainer = styled.div`
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
