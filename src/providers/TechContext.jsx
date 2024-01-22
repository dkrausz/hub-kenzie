import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const [registerModal, setRegisterModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [techSelected, setTechSelected] = useState(null);
  
  const{techList , setTechList} = useContext(UserContext)  

  const techRegister = async (techData, reset) => {
    try {
      const { data } = await api.post("/users/techs", techData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset();

      setTechList([...techList, data]);
      console.log(techList);
      toast.success("Tecnologia cadastrada!", { autoClose: 500 });
    } catch (error) {
      console.log(error);
    }
  };

  const delTech = async (id) => {
    try {
      const { data } = api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const filteredTechList = techList.filter((item) => id !== item.id);
      setTechList(filteredTechList);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal=(tech)=>{
    setTechSelected(tech);
    setEditModal(true);
  }

  const editTech = async (tech) => {  
   const newStatus = {status:tech.status};  
    try {
      const {data} = await api.put(`/users/techs/${techSelected.id}`,newStatus,{
        headers:{
          Authorization: `Bearer ${token}`
        },
      });
      const newEdit ={...techSelected,...newStatus};
      const newTechList = techList.map((tech)=>tech.id===newEdit.id ? data : tech);
      setTechList(newTechList);
      toast.success("Tecnologia alterada!", { autoClose: 500 });

    } catch (error) {
      console.log(error);
      
    }
    setEditModal(true);

  };


  return (
    <TechContext.Provider
      value={{
        techRegister,
        editTech,
        registerModal,
        setRegisterModal,
        delTech,
        editModal,
        techSelected,
        setEditModal,
        openEditModal, 
        techList,       
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
