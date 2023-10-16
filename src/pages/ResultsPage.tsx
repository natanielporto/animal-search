import { useContext, useEffect, useState } from "react";
import { AnimalContext, AnimalProps } from "../globalContext/globalContext";
import styles from "./ResultPage.module.css";
import useScreenSize from "../hooks/useScreenSize";
import { ResultsHeader } from "../components/ResultsHeader/ResultsHeader";
import { ResultLine } from "../components/ResultLine/ResultLine";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { AnimalModal } from "../components/AnimalModal/AnimalModal";
import Skeleton from "react-loading-skeleton";

export const ResultsPage = () => {
  const {
    search,
    handleSearchResult,
    showAnimalCard,
    card,
    modalOpen,
    setModalOpen,
  } = useContext(AnimalContext);

  const [loading, setLoading] = useState(true);
  const [finalResponse, setFinalResponse] = useState<AnimalProps[]>([]);

  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width <= 1024) setModalOpen(true);
  }, [screenSize.width, setModalOpen]);

  useEffect(() => {
    if (search === "") {
      setFinalResponse([]);
      setLoading(false);
    } else {
      setLoading(true);

      const timer = setTimeout(() => {
        const result = handleSearchResult();
        setFinalResponse(result);
        setLoading(false);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [search, handleSearchResult]);

  return (
    <div>
      <ResultsHeader />
      <div className={styles.responseWrapper}>
        {search === "" && (
          <div className={styles.finalResponseFail}>
            Try looking for:{" "}
            <strong>
              insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
              rabbit, cat, snake, dog, bird.
            </strong>
          </div>
        )}
        {!loading && search !== "" && finalResponse?.length === 0 && (
          <div className={styles.finalResponseFail}>
            <div>
              No results found for <strong>'{search}'</strong>
            </div>
            <div>
              Try looking for:{" "}
              <strong>
                insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
                rabbit, cat, snake, dog, bird.
              </strong>
            </div>
          </div>
        )}
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.leftInfo}>
          {loading && finalResponse.length === 0 && <Skeleton count={5} />}

          {finalResponse?.map((animal) => (
            <ResultLine
              key={animal.id}
              description={animal.description}
              title={animal.title}
              url={animal.url}
              image={animal.image}
              id={animal.id}
              type={animal.type}
            />
          ))}
        </div>

        <div className={styles.rightInfo}>
          {screenSize.width >= 1024 && showAnimalCard && card && <AnimalCard />}
        </div>

        <div>
          {screenSize.width < 1024 && showAnimalCard && card && modalOpen && (
            <AnimalModal />
          )}
        </div>
      </div>
    </div>
  );
};
