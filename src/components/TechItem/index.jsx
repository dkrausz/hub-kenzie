import Edit from "../../assets/Edit.svg";
import Del from "../../assets/Del.svg";
import styles from "../TechItem/style.module.scss"
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";


export const TechItem = ({ item }) => {

const {delTech,openEditModal} = useContext(TechContext);

  return (
    <li className={styles.container}>
      <h3 className="paragraph white">{item.title}</h3>
      <div className={styles.item__contains}>
         <p className="paragraph">{item.status}</p>
         <div className={styles.imgs}>

        <img src={Edit} alt="" onClick={()=>{openEditModal(item)}} />
        <img src={Del} alt="" onClick={()=>{delTech(item.id)}}/>
         </div>
      </div>
    </li>
  );
};
