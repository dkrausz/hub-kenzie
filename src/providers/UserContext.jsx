import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  const userLogin = async (userData) => {
    try {
      const { data } = await api.post("/sessions", userData);
      setUser(data.user);
      saveLocalStorage(data.token);      
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops!, algo deu errado");
    }
  };

  const saveLocalStorage = (data) => {
    localStorage.setItem("@TOKEN", data);
  };

  const userRegister = async (userData) => {
    try {
      const { data } = await api.post("/users", userData);
      toast.success("Conta criada com sucesso!", { autoClose: 1500 });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Ops!, Algo deu errado", { autoClose: 3000 });
    }
  };

  useEffect(() => {    
    const loadUser = async () => {       
      const token = localStorage.getItem("@TOKEN");       
      if (token) {
        try {
          const { data } = await api.get("/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);         
          navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
      }
    };  
   
    loadUser();
}, []);

  return (
    <UserContext.Provider value={{ userLogout, user, userLogin, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
