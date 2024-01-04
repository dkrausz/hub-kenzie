import styles from "../LoginPage/style.module.scss";
import logo from "../../assets/Logo.svg";
import { LoginForm } from "../../components/Forms/loginForm";

export const LoginPage = ({ setUser }) => {
  return (
    <section className={styles.container}>
      <img src={logo} alt="" />

      <LoginForm setUser={setUser} />
    </section>
  );
};
