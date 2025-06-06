import styles from "./Modal.module.css";
import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}>
        <dialog
          open
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </dialog>
      </div>
    </>
  );
}
export default Modal;
