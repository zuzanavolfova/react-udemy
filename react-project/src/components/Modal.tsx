import styles from "./Modal.module.css";
import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <>
      <div className={styles.backdrop}>
        <dialog open className={styles.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}
export default Modal;
