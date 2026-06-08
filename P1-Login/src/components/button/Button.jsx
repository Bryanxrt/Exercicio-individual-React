import { StyledButton } from "./styles";

export default function Button({ children, onClick, type = "button" }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
