import { useContext } from "react";
import { TechItem } from "../TechItem";
import styles from "../TechList/style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";

export const TechList = () => {
  const {techList, setRegisterModal } = useContext(TechContext); 

  return (
    <div className="main__container">
      <div className={styles.main__contains}>
        <h2 className="title">Tecnologias</h2>
        <button
          className={`buttonDisable ${styles.button__size} `}
          onClick={() => setRegisterModal(true)}
        >+</button>
      </div>
      <div className={styles.container}>
        <ul className={styles.list__container}>
          {techList.map((item) => (
            <TechItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
