import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 316px;
  width: 448px;
  gap: 12px;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 22px;
    font-weight: 600;
  }

  p {
    color: #dbdee1;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Input = styled.input`
  width: 416px;
  height: 42px;
  padding: 15px;
  border-radius: 8px;
  background-color: #35353c;
  border: 1px solid #444549;
  font-weight: 400;
  color: aliceblue;

  &:focus {
    border-color: #4f86e6;
    outline: none;
    transition: border-color 0.2s;
  }
`;

export const RegisterText = styled.p`
  color: #a3a4aa;
  font-size: 12px;
  font-weight: 400;
`;

export const Required = styled.span`
  color: #f69c97;
`;
