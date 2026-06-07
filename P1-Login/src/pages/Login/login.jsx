import styles from "./styles.module.css";
import qr from "../../assets/qr.png";
import Form from "../../components/Form/form";
import discordLogo from "../../assets/discord-logo.png";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.discordBrand}>
        <img src={discordLogo} alt="Discord" />
      </div>
      <div className={styles.loginBox}>
        <Form></Form>

        <div className={styles.imageContainer}>
          <img src={qr} alt="qr code" className={styles.qr} />
          <div className={styles.txtQr}>
            <h3>Entrar com código QR</h3>
            <p className={styles.p1}>
              Escanei isto com <strong>app movel do Discord</strong> para fazer
              login imediatamente.
            </p>
            <a href="#">Ou, faça login com uma passkey</a>
          </div>
        </div>
      </div>
    </div>
  );
}
