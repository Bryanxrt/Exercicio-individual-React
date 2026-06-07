import style from "./styles.module.css";

export default function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}
