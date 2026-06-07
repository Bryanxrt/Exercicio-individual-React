# 🎮 Login Clone — React

Recriação fiel da tela de login do Discord, desenvolvida como exercício prático de React com foco em componentização, estilização e fidelidade visual ao design original.

<img width="2548" height="1267" alt="image" src="https://github.com/user-attachments/assets/24ffccb9-857d-40c8-a5df-28646218a9ff" />

---

## 📋 Sobre o Projeto

Este projeto é um clone da página de login do Discord, construído do zero utilizando React. O objetivo foi reproduzir o layout original com fidelidade — incluindo o formulário de login, o card com QR Code e o background com efeito de galáxia — praticando conceitos fundamentais de React e CSS.

---

## 🚀 Tecnologias Utilizadas

- **React** — biblioteca principal para construção da interface
- **CSS Modules** / CSS puro — estilização dos componentes
- **HTML5** — estrutura semântica

---

## 🧠 Conceitos Praticados

- Criação e organização de **componentes React**
- Uso de **props** para passar dados entre componentes
- Gerenciamento de estado com **useState** (campos do formulário)
- Estilização com **CSS** fiel ao design original
- Uso de **flexbox** para alinhamento e layout
- Responsividade e posicionamento de elementos

---

## 🖥️ Layout Implementado

A tela é composta por:

- **Background** com gradiente de azul/roxo escuro e estrelas decorativas
- **Card de login** dividido em dois painéis:
  - **Esquerdo** — formulário com campos de e-mail/telefone e senha, botão "Entrar" e link de cadastro
  - **Direito** — QR Code com instrução de login pelo app móvel

---

## 📁 Estrutura do Projeto

```
P1-LOGIN/
├── src/
│   ├── assets/
│   │   ├── Discord-Logo.png
│   │   ├── discord.png
│   │   ├── image.png
│   │   └── qr.png
│   ├── components/
│   │   ├── button/
│   │   │   ├── Button.jsx
│   │   │   └── styles.module.css
│   │   └── Form/
│   │       ├── form.jsx
│   │       └── styles.module.css
│   ├── pages/
│   │   └── Login/
│   │       ├── login.jsx
│   │       └── styles.module.css
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
```

---

## ▶️ Como Rodar o Projeto

**Pré-requisitos:** Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/Bryanxrt/discord-login-clone

# Acesse a pasta
cd discord-login-clone

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 📸 Referência Visual

A interface foi baseada na tela oficial de login do Discord (versão PT-BR), replicando:

- Paleta de cores roxa/azul escura
- Tipografia e hierarquia visual original
- Posicionamento e proporções do card central
- Efeito de partículas/estrelas no background

---

## 👨‍💻 Autor

**Igor** — [@Bryanxrt](https://github.com/Bryanxrt)

Desenvolvido como exercício prático no curso de Desenvolvimento Full Stack — **SERRATEC Turma 37**
