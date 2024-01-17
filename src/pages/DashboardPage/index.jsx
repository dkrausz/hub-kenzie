import { useContext } from "react";
import { Header } from "../../components/Header";
import styles from "../DashboardPage/style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";
import { ModalNewTechForm } from "../../components/Forms/ModalNewTechForm";
import { TechContext } from "../../providers/TechContext";
import { ModalEditTechForm } from "../../components/Forms/ModalEditTechForm";

export const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { registerModal, editModal } = useContext(TechContext);

  return (
    <>
      <Header userLogout={userLogout} />
      <div className={styles.container__line}>
        <div className={styles.user__container}>
          <h1 className="title">Olá, {user?.name}</h1>
          <p className="paragraph">{user?.course_module}</p>
        </div>
      </div>
      <div>
        <TechList />
      </div>

      {registerModal ? <ModalNewTechForm /> : null}
      {editModal ? <ModalEditTechForm /> : null}
    </>
  );
};
