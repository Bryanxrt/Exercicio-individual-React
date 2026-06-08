import Button from "../button/Button";
import { useEffect, useState } from "react";
import { FormContainer, Input, RegisterText, Required, Welcome } from "./styles";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tentativaLogin, setTentativaLogin] = useState(null);

  useEffect(() => {
    if (!tentativaLogin) return;

    const loginCorreto = "igorbrian@gmail.com";
    const senhaCorreta = "12345678";

    if (
      tentativaLogin.username === loginCorreto &&
      tentativaLogin.password === senhaCorreta
    ) {
      window.alert("Login realizado com sucesso!");
    } else {
      window.alert("E-mail ou senha incorretos.");
    }
  }, [tentativaLogin]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTentativaLogin({ username, password });
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
      <Input type="email" id="email" name="email" required value={username} onChange={(e) => setUsername(e.target.value)}/>

      <label htmlFor="password">
        Senha<Required> *</Required>
      </label>
      <Input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

      <a href="#">Esqueceu sua senha?</a>
      <Button type="submit">Entrar</Button>

      <RegisterText>
        Precisando de uma conta? <a href="#">Registre-se</a>
      </RegisterText>
    </FormContainer>
  );
};

export default Form;
