import { Outlet } from "react-router-dom";

import Nav from "components/Nav/Nav";

import styles from "./styles.css";

const Layout = () => (
  <div className={styles.root}>
    <Nav />
    <Outlet />
  </div>
);

export default Layout;
