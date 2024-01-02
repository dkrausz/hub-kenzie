import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword";
import { loginFormSchema } from "./loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const LoginForm = ({ setUser }) => {
 
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

  const navigate = useNavigate();

  const userLogin = async (userData) => {
    try {
      const { data } = await api.post("/sessions", userData);     
      setUser(data.user);
      saveLocalStorage(data.token);
      navigate("/dashboard")
    } catch (error) {
      toast.error("Ops!, algo deu errado");
      
    }
  };

  const saveLocalStorage=(data)=>{     
    localStorage.setItem("@token" , JSON.stringify(data));
  }

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

      <button className="button" type="submit">
        Entrar
      </button>
      <p className="paragraph central">
        Ainda não possui uma conta?
      </p>
      <Link to="/register">
        <button className="buttonDisable"> Cadastre-se</button>
      </Link>
    </form>
  );
};
