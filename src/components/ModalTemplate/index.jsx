import styles from "../ModalTemplate/style.module.scss"

export const ModalTemplate=({children})=>{

    return(
        <div role="dialog" className={styles.overlay}>
            <div className={styles.modal__container}>
               {children}
            </div>
        </div>

    )

}