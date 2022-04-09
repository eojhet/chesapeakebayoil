import { useEffect } from 'react';
import styles from '/styles/Modal.module.scss';

export default function Modal (props) {
  if (!props.show){
    return null;
  }

  return (
    <div className={styles.modal} onClick={props.onClose}>

      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>

        <div className={styles.modalHeader}>

          <h3 className={styles.modalTitle}>{props.title}</h3>

          <div onClick={props.onClose} className={styles.closeButton}><span className={styles.x1} /><span className={styles.x2} /></div>

        </div>

        <div className={styles.modalBody}>{props.children}</div>

      </div>
    </div>
  )
}