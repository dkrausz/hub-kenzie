import { ModalTemplate } from "../../ModalTemplate";
import { Input } from "../Input";
import styles from "../ModalNewTechForm/style.module.scss";

export const ModalNewTechForm = () => {
  return (
    <ModalTemplate>
      <div>
        <div className={styles.modal__header}>
          <h2 className="paragraph white">Cadastrar Tecnologia</h2>
          <button className={styles.closeBtn}>X</button>
        </div>
        <div className={styles.modal__contains}>
          <Input label="Nome" type="text" />

          <Input label="Selecione" type="text" />

          <button className={`${styles.btn} button`}>Cadastrar Tecnologia</button>
        </div>
      </div>
    </ModalTemplate>
  );
};
