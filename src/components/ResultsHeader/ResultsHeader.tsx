import { TbGridDots } from "react-icons/tb";
import logo from "../../assets/googlelogo.png";
import styles from "./ResultsHeader.module.css";
import { useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AnimalContext } from "../../globalContext/globalContext";

export const ResultsHeader = () => {
  const { search, setSearch, handleSearch } = useContext(AnimalContext);

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleSearch(event.target.value);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSearch]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.inputAndIconsWrapper}>
        <img src={logo} alt="Google Logo" className={styles.logo} />
        <form className={styles.inputWrapper}>
          <input
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
        </form>
      </div>

      <div className={styles.iconAndAvatar}>
        <TbGridDots size={24} />
        <img
          className={styles.avatar}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          alt="Avatar do usuário"
        />
      </div>
    </div>
  );
};
