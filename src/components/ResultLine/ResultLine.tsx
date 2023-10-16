import { useContext } from "react";
import styles from "./ResultLine.module.css";
import { AnimalContext, AnimalProps } from "../../globalContext/globalContext";

export const ResultLine = ({
  id,
  url,
  title,
  description,
  image,
  type,
}: AnimalProps) => {
  const { setModalOpen, setCard, setShowAnimalCard } =
    useContext(AnimalContext);

  return (
    <div className={styles.resultLineWrapper}>
      <div className={styles.url}>{url}</div>
      <div
        className={styles.title}
        onClick={() => [
          setCard({ id, url, title, description, image, type }),
          setShowAnimalCard(true),
          setModalOpen(true),
        ]}
      >
        {title}
      </div>
      <div>{description}</div>
    </div>
  );
};
