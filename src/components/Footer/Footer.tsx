import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div>@Google 2021</div>
        <div>Version 0.1.0</div>
      </div>
    </div>
  );
};
