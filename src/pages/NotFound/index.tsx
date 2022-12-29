import styles from "./styles.css";

const NotFound = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1>Page not found</h1>
      <p>You might forgot the correct url or something went wrong...</p>
    </div>
  </div>
);

export default NotFound;
