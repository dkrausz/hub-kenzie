import styles from "../LoginPage/style.module.scss"
import logo from "../../assets/logo.svg"
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa";
import { useState } from "react";


export const LoginPage = () =>{
    const [isHidden, setIsHidden] = useState(false);

    return(
        
        <section className={styles.container}>

        <img src={logo} alt="" />
        <form className={styles.form__container}>
        <h2 className={styles.title}>Login</h2>

        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" placeholder="Digite seu email" required className={styles.input}/>
        <label htmlFor="password" className={styles.label}>Senha</label>
        <div>
        <input type="password" id="password" placeholder="Digite sua senha" required className={styles.input}/>
        <FaRegEyeSlash/>
        <FaRegEye/>
        </div>

        <button className={styles.button}>Entrar</button>
        <p className={styles.paragraph}>Ainda não possui uma conta?</p>
        <button className={styles.buttonDisable} > Cadastre-se</button>
        </form>
       
        </section>
    
    )
}