import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../loginForm/style.module.scss";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form className={styles.form__container}>
      <h2 className={styles.title}>Login</h2>

      <Input
        label={"Email"}
        id={"email"}
        {...register("email")}
        type={"email"}
        placeholder="Digite aqui seu email"
      />

      {/* <label htmlFor="password" className={styles.label}>
        Senha
      </label>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          required
          className={styles.input}
        />
        <FaRegEyeSlash />
        <FaRegEye />
      </div>  */}
       <InputPassword id={"password"} placeholder={"Digite sua senha"} {...register("password")} />

      <button className={styles.button}>Entrar</button>
      <p className={`${styles.paragraph} ${styles.central}`}>
        Ainda não possui uma conta?
      </p>
      <Link to="/register">
        <button className={styles.buttonDisable}> Cadastre-se</button>
      </Link>
    </form>
  );
};
