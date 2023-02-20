import cn from "classnames";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { routes } from "config/routes";

import styles from "./styles.css";

const Nav: FC = () => {
  const getClassNames = (isActive: boolean) =>
    cn(styles.link, {
      [styles.active]: isActive,
    });

  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <NavLink className={({ isActive }) => getClassNames(isActive)} to={routes.main}>
            Main
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={({ isActive }) => getClassNames(isActive)} to={routes.report}>
            Report
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={({ isActive }) => getClassNames(isActive)} to={routes.about}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
