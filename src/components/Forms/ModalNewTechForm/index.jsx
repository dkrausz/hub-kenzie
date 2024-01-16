import { useForm } from "react-hook-form";
import { ModalTemplate } from "../../ModalTemplate";
import { Input } from "../Input";
import {InputTechSelect} from "../InputTechSelect"
import styles from "../ModalNewTechForm/style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const ModalNewTechForm = () => {
  const {register,handleSubmit,reset} = useForm();
  const {techRegister,setRegisterModal} = useContext(TechContext);

  const onSubmit = (TechData)=>{
    techRegister(TechData,reset);
  }

  return (
    <ModalTemplate>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div className={styles.modal__header}>
          <h2 className="paragraph white">Cadastrar Tecnologia</h2>
          <button className={styles.closeBtn} onClick={()=>{setRegisterModal(false)}}>X</button>
        </div>
        <div className={styles.modal__contains}>
          <Input label="Nome" type="text" {...register("title")}/>

          <InputTechSelect label="Selecione a Tecnologia" {...register("status")} />          

          <button className={`${styles.btn} button`} type="submit">Cadastrar Tecnologia</button>
        </div>
      </form>
    </ModalTemplate>
  );
};
