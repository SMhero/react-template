import { FC } from "react";

import Router from "components/Router/Router";

import styles from "./styles.css";

const App: FC = () => (
  <div className={styles.root}>
    <Router />
  </div>
);

export default App;
