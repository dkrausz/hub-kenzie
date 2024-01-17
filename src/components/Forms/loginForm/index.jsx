import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import styles from "../loginForm/style.module.scss"

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (userData) => {
    userLogin(userData);
  };

  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="title">Login</h2>

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

      <div className={styles.buttons__container}>
        <button className="button" type="submit">
          Entrar
        </button>
        <p className="paragraph central">Ainda não possui uma conta?</p>
        <Link to="/register">
          <button className="buttonDisable"> Cadastre-se</button>
        </Link>
      </div>
    </form>
  );
};
