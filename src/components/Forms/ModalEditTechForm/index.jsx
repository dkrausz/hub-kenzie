import { useForm } from "react-hook-form";
import { ModalTemplate } from "../../ModalTemplate";
import { Input } from "../Input";
import {InputTechSelect} from "../InputTechSelect"
import styles from "../ModalEditTechForm/style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const ModalEditTechForm = () => {
  const {editTech,setEditModal,techSelected} = useContext(TechContext);

  const {register,handleSubmit,reset} = useForm({defaultValues:{
    title:techSelected.title,
    status:techSelected.status 
  }});

  const onSubmit = (TechData)=>{
    editTech(TechData,reset);
  }

  return (
    <ModalTemplate>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div className={styles.modal__header}>
          <h2 className="paragraph white">Tecnologia Detalhes</h2>
          <button className={styles.closeBtn} onClick={()=>{setEditModal(false)}}>X</button>
        </div>
        <div className={styles.modal__contains}>
          <Input label="Nome" type="text" disabled {...register("title")}/>

          <InputTechSelect label="Status" {...register("status")} />          

          <button className={`${styles.btn} button`} type="submit">Salvar alterações</button>
        </div>
      </form>
    </ModalTemplate>
  );
};
