import Button from "../button/Button";
import { useState } from "react";
import {
  FormContainer,
  Input,
  RegisterText,
  Required,
  Welcome,
} from "./styles";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("E-mail:", username);
    console.log("Senha:", password);
    console.log("Logado");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Welcome>
        <h2>Boas-vindas de volta!</h2>
        <p>Estamos muito animados em te ver novamente!</p>
      </Welcome>

      <label htmlFor="email">
        E-mail ou número de telefone<Required> *</Required>
      </label>
      <Input
        type="email"
        id="email"
        name="email"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">
        Senha<Required> *</Required>
      </label>
      <Input
        type="password"
        id="password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <a href="#">Esqueceu sua senha?</a>
      <Button type="submit">Entrar</Button>

      <RegisterText>
        Precisando de uma conta? <a href="#">Registre-se</a>
      </RegisterText>
    </FormContainer>
  );
};

export default Form;
