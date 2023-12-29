import styles from "../registerForm/style.module.scss";
import {useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Input } from "../Input";

export const RegisterForm = () =>{

  const {register,handleSubmit} = useForm();

    const onSubmit = (e)=>{
      console.log(e);
    }
  
  return(
        <form className={styles.form__container} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Crie sua conta</h2>
        <p className={styles.paragraph}>Rapido e grátis, vamos nessa</p>

        
       <Input label={"Nome"} id={"name"} {...register("name")} type={"text"} placeholder="Digite seu nome"/>

       <Input label={"Email"} id={"email"} {...register("email")} type={"email"} placeholder="Digite aqui seu email"/>

       <Input label={"Senha"} id={"password"} {...register("password")} type={"password"} placeholder="Digite aqui sua senha"/>

       <Input label={"Confirmar Senha"} id={"confirmPassword"} {...register("confirmPassword")} type={"password"} placeholder="Digite novamente sua senha"/>

       <Input label={"Bio"} id={"bio"} {...register("bio")} type={"text"} placeholder="Fale sobre você"/>

       <Input label={"Contato"} id={"contact"} {...register("contact")} type={"text"} placeholder="Opção  de contato"/>
           
        

        <label htmlFor="module" className={styles.label}>Selecionar módulo</label>
        <input type="text" id="module" className={styles.input} required/>

        <button type="submit" className={`${styles.buttonNegative} ${styles.form__button}`}>Cadastrar</button>
      </form>
    )
}