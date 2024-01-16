import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);

  const techRegister = async (techData,reset) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", techData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset();
      toast.success("Tecnologia cadastrada!", { autoClose: 500 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ techRegister, registerModal, setRegisterModal }}
    >
      {children}
    </TechContext.Provider>
  );
};
