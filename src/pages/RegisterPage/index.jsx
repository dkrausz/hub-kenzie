import styles from "../RegisterPage/style.module.scss"
import logo from "../../assets/Logo.svg"
import { RegisterForm } from "../../components/Forms/registerForm";


export const RegisterPage = () => {
  return (   
   
    <section className={styles.container}>
      <div className={styles.header__container}>

<img src={logo} alt="" />
<button className={`${styles.buttonDisable} ${styles.sm}`}>Voltar</button>
      </div>
     
     <RegisterForm/>
    
       </section>
  );
};
