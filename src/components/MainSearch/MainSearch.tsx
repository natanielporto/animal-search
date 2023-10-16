import logo from "../../assets/googlelogo.png";
import styles from "./MainSearch.module.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FormEvent, useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimalContext } from "../../globalContext/globalContext";

export const MainSearch = () => {
  const { search, setSearch, handleSearch } = useContext(AnimalContext);

  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const redirectToPageWithInfo = () => {
    navigate("/results");
  };

  const handleResult = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      redirectToPageWithInfo();
    },
    [redirectToPageWithInfo]
  );

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleResult(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleResult]);

  return (
    <div className={styles.mainSearchWrapper}>
      <div className={styles.mainSearchContainer}>
        <img src={logo} alt="Google Logo" className={styles.logo} />

        <form className={styles.inputWrapper} onSubmit={(e) => handleResult(e)}>
          <input
            name="animal"
            type="text"
            value={search}
            className={styles.input}
            onChange={(e) => handleSearch(e)}
          />
          <div className={styles.search}>
            <BsSearch size={16} />
          </div>
          {search && (
            <button className={styles.close} onClick={() => setSearch("")}>
              <AiOutlineClose size={16} />
            </button>
          )}
          <button className={styles.button} type="submit" disabled={!search}>
            Buscar
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};
