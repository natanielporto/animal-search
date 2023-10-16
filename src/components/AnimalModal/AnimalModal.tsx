import { useContext } from "react";
import { AnimalContext } from "../../globalContext/globalContext";
import styles from "./AnimalModal.module.css";
import { createPortal } from "react-dom";

export const AnimalModal = () => {
  const { card, setModalOpen } = useContext(AnimalContext);

  return createPortal(
    <button onClick={() => setModalOpen(false)} className={styles.closeCard}>
      <div className={styles.animalCard}>
        <img src={card.image} alt="" className={styles.image} />
        <div className={styles.url}>{card.url}</div>
        <div className={styles.title}>{card.title}</div>
        <div className={styles.description}>{card.description}</div>
      </div>
    </button>,
    document.body
  );
};
