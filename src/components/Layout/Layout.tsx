import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header/Header";

import styles from "./styles.css";

const Layout: FC = () => (
  <div className={styles.root}>
    <Header />
    <Outlet />
  </div>
);

export default Layout;
