import TemplateIcon from "assets/images/react-template.svg";
import Nav from "components/Nav/Nav";

import styles from "./styles.css";

const Header = () => (
  <header>
    <Nav />
    <div className={styles.title}>
      <TemplateIcon className={styles.icon} width={68} height={68} />
      <h1 className={styles.titleText}>React Template</h1>
    </div>
  </header>
);

export default Header;
