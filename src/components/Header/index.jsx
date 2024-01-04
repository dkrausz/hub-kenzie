import logo from "../../assets/Logo.svg";
import styles from "../Header/styles.module.scss";

export const Header = ({ userLogout }) => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__contains}>
        <img src={logo} alt="Logo Kenzie Hub" />
        <button
          className={`${styles.buttonDisable} ${styles.sm}`}
          onClick={userLogout}
        >
          Sair
        </button>
      </div>
    </header>
  );
};
