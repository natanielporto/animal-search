import styles from "./Hearder.module.css";
import { TbGridDots } from "react-icons/tb";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <strong>AgileContent</strong> Frontend test
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
