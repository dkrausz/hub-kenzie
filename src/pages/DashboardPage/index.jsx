import { useContext } from "react";
import { Header } from "../../components/Header";
import styles from "../DashboardPage/style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";
import { ModalNewTechForm } from "../../components/Forms/ModalNewTechForm";
import { TechContext } from "../../providers/TechContext";


export const DashboardPage = () => {

  const {user, userLogout} = useContext(UserContext);
  const {registerModal} = useContext(TechContext);

  return (
    <>
      <Header userLogout={userLogout} />
      <div className={styles.user__container}>
        <h1 className="title">Olá, {user?.name}</h1>
        <p className="paragraph">{user?.course_module}</p>
      </div>
      <div className={styles.main__container}>
       <TechList/>
      </div>

      {registerModal ? (<ModalNewTechForm/>) : null}
      
    </>
  );
};

