import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => (!props.disabled ? "#f93e83" : "#666666")};
  color: #ffffff;
  width: 80%;
  height: 2.75rem;
  border-radius: 3px;
  margin: 0 auto;
  margin-bottom: 10px;
`;
