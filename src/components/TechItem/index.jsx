import Edit from "../../assets/Edit.svg";
import Del from "../../assets/Del.svg";
import styles from "../TechItem/style.module.scss"

export const TechItem = ({ item }) => {
  return (
    <li className={styles.container}>
      <h3 className="paragraph white">{item.title}</h3>
      <div className={styles.item__contains}>
         <p className="paragraph">{item.status}</p>
        <img src={Edit} alt="" />
        <img src={Del} alt="" />
      </div>
    </li>
  );
};
