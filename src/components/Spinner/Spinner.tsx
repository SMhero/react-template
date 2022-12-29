import { FC } from "react";

import styles from "./styles.css";

const Spinner: FC = () => (
  <div className={styles.root}>
    <div className={`${styles.bounce} ${styles.bounce1}`} />
    <div className={`${styles.bounce} ${styles.bounce2}`} />
    <div className={styles.bounce} />
  </div>
);

export default Spinner;
