import styles from "../RegisterPage/style.module.scss"
import logo from "../../assets/Logo.svg"
import { RegisterForm } from "../../components/Forms/registerForm";
import {Link} from "react-router-dom"

export const RegisterPage = () => {
  return (   
   
    <section className={styles.container}>
      <div className={styles.header__container}>

<img src={logo} alt="" />
<Link to="/">
<button className={`${styles.buttonDisable} ${styles.sm}`}>Voltar</button>
</Link>
      </div>
     
     <RegisterForm/>
    
       </section>
  );
};
