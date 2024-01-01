import { forwardRef } from "react";
import styles from "../InputPassword/style.module.scss";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";

export const InputPassword = forwardRef(({ label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);
  const { id } = rest;
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.password__container}>
        <input
          ref={ref}
          {...rest}
          className={styles.input__password}
          type={isHidden ? "text" : "password"}
        />
        {isHidden ? (
          <FaRegEyeSlash
            className={styles.hidden__btn}
            onClick={() => setIsHidden(false)}
          />
        ) : (
          <FaRegEye
            className={styles.hidden__btn}
            onClick={()=>setIsHidden(true)}
          />
        )}
      </div>
    </div>
  );
});
