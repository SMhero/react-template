import cn from "classnames";
import { FC } from "react";

import styles from "./styles.css";

type Props = {
  className?: string;
};

const Spinner: FC<Props> = ({ className = "" }) => (
  <div className={cn(styles.root, className)}>
    <div className={`${styles.bounce} ${styles.bounce1}`} />
    <div className={`${styles.bounce} ${styles.bounce2}`} />
    <div className={styles.bounce} />
  </div>
);

export default Spinner;
