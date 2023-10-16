import { useContext } from "react";
import { AnimalContext } from "../../globalContext/globalContext";
import styles from "./AnimalCard.module.css";

export const AnimalCard = () => {
  const { card } = useContext(AnimalContext);

  return (
    <div className={styles.animalCard}>
      <img src={card.image} alt="Imagem do Animal" className={styles.image} />
      <div className={styles.url} aria-label="url">
        {card.url}
      </div>
      <div className={styles.title}>{card.title}</div>
      <div>{card.description}</div>
    </div>
  );
};
