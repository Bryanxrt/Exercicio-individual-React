import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fafafa;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  height: 412px;
  width: 784px;
  gap: 40px;
  background-color: #393a41;
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
`;

export const QrCode = styled.img`
  width: 176px;
  height: 176px;
  border-radius: 8px;
`;

export const QrText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-weight: 400;
`;

export const QrTextDescription = styled.p`
  width: 230px;
  margin: 0;
  text-align: center;
  line-height: 20px;
  font-size: 15px;
`;

export const DiscordBrand = styled.div`
  position: absolute;
  top: 40px;
  left: 35px;
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    width: 140px;
    height: auto;
  }
`;
