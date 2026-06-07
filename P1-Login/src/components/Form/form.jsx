import styles from "./styles.module.css";
import Button from "../button/Button";
import { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("E-mail:", username);
        console.log("Senha:", password);  
        console.log("Logado");
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.welcome}>
        <h2>Boas-vindas de volta!</h2>
        <p>Estamos muito animados em te ver novamente!</p>
      </div>

      <label htmlFor="email">
        E-mail ou numero de telefone<span className={styles.required}> *</span>
      </label>
      <input type="email" id="email" name="email" required onChange={(e) => setUsername(e.target.value)}/>

      <label htmlFor="password">
        Senha<span className={styles.required}> *</span>
      </label>
      <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>

      <a href="#">Esqueceu sua senha?</a>
      <Button type="submit">Entrar</Button>

      <p className={styles.registre}>
        Precisando de uma conta? <a href="#">Registre-se</a>
      </p>
    </form>
  );
}

export default Form
