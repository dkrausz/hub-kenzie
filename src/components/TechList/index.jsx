import { TechItem } from "../TechItem";
import styles from "../TechList/style.module.scss";

export const TechList = () => {
  const techList = [
    {
      id: "55126701-18ac-40df-aab9-3a88657db446",
      title: "React",
      status: "Avançado",
      created_at: "2020-11-30T16:26:53.953Z",
      updated_at: "2020-11-30T16:26:53.953Z",
    },
    {
      id: "af06a853-c1fb-4a94-960d-1c6caa8d2b5c",
      title: "Typescript",
      status: "Avançado",
      created_at: "2020-11-30T18:40:08.316Z",
      updated_at: "2020-11-30T18:40:08.316Z",
    },
  ];
  return (
    <div className={` main__container`}>
      <div className={styles.main__contains}>
        <h2 className="title">Tecnologias</h2>
        <button className={`buttonDisable ${styles.button__size} `}>+</button>
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
