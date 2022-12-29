import TemplateIcon from "assets/images/react-template.svg";

import styles from "./styles.css";

const Template = () => (
  <div>
    <div className={styles.title}>
      <TemplateIcon className={styles.logo} width={68} height={68} />
      <h1 className={styles.titleText}>React Template</h1>
    </div>
  </div>
);

export default Template;
