import { useContext } from "react";
import { Header } from "../../components/Header";
import styles from "../DashboardPage/style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {

  const {user, userLogout} = useContext(UserContext);

  return (
    <>
      <Header userLogout={userLogout} />
      <div className={styles.user__container}>
        <h1 className="title">Olá, {user?.name}</h1>
        <p className="paragraph">{user?.course_module}</p>
      </div>
      <div className={styles.main__container}>
        <div className={styles.main__contains}>
          <h1 className="title">Que pena! Estamos em desenvolvimento :(</h1>
          <p className="paragraph white">
            Nossa aplicação está em desenvolvimento, em breveteremos novidades
          </p>
        </div>
      </div>
    </>
  );
};
