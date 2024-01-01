import styles from "../registerForm/style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { InputSelect } from "../InputSelect";
import { registerFormSchema } from "./registerForm.schema";
import { InputPassword } from "../InputPassword";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (e) => {
    console.log(e);
  };
  
  return (
    <form className={styles.form__container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Crie sua conta</h2>
      <p className={`${styles.paragraph} ${styles.central}`}>
        Rapido e grátis, vamos nessa
      </p>

      <Input
        label={"Nome"}
        id={"name"}
        {...register("name")}
        type={"text"}
        error={errors.name}
        placeholder="Digite seu nome"
      />

      <Input
        label={"Email"}
        id={"email"}
        {...register("email")}
        type={"email"}
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
      <InputPassword
        label={"Confirmar Senha"}
        id={"confirmPassword"}
        error={errors.confirmPassword}
        placeholder={"Digite novamente sua senha"}
        {...register("confirmPassword")}
      />

      <Input
        label={"Bio"}
        id={"bio"}
        {...register("bio")}
        type={"text"}
        error={errors.bio}
        placeholder="Fale sobre você"
      />

      <Input
        label={"Contato"}
        id={"contact"}
        {...register("contact")}
        type={"text"}
        error={errors.contact}
        placeholder="Opção  de contato"
      />

      <InputSelect
        label={"Modulo"}
        id={"course_module"}
        error={errors.course_module}
        {...register("course_module")}
      />

      <button type="submit" className={`${styles.buttonNegative}`}>
        Cadastrar
      </button>
    </form>
  );
};
