import qr from "../../assets/qr.png";
import Form from "../../components/Form/form";
import discordLogo from "../../assets/discord-logo.png";
import {
  Container,
  DiscordBrand,
  ImageContainer,
  LoginBox,
  QrCode,
  QrText,
  QrTextDescription,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <DiscordBrand>
        <img src={discordLogo} alt="Discord" />
      </DiscordBrand>

      <LoginBox>
        <Form />

        <ImageContainer>
          <QrCode src={qr} alt="qr code" />
          <QrText>
            <h3>Entrar com código QR</h3>
            <QrTextDescription>
              Escaneie isto com <strong>app móvel do Discord</strong> para fazer
              login imediatamente.
            </QrTextDescription>
            <a href="#">Ou, faça login com uma passkey</a>
          </QrText>
        </ImageContainer>
      </LoginBox>
    </Container>
  );
}
