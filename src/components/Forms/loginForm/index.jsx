import { Link } from "react-router-dom";
import styles from "../loginForm/style.module.scss";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword";
import {loginFormSchema} from "./loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const { register, handleSubmit,formState: {errors} } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

const onSubmit=(e)=>{
  console.log(e);
}
console.log(errors);
  return (
    <form className={styles.form__container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Login</h2>

      <Input
        label={"Email"}
        id={"email"}
        {...register("email")}
        type={"text"}
        error={errors.email}
        placeholder="Digite aqui seu email"
      />

      <InputPassword
        label={"Senha"}
        id={"password"}
        error={errors.password}
        placeholder={"Digite sua senha"}
        {...register("password")}
      />

      <button className={styles.button} type="submit" >Entrar</button>
      <p className={`${styles.paragraph} ${styles.central}`}>
        Ainda não possui uma conta?
      </p>
      <Link to="/register">
        <button className={styles.buttonDisable}> Cadastre-se</button>
      </Link>
    </form>
  );
};
