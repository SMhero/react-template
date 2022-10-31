import TemplateImg from "assets/images/react-template.svg";

import styles from "./styles.css";

const Template = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <img className={styles.image} src={TemplateImg} alt="React Template" />
        <h1 className={styles.titleText}>React Template</h1>
      </div>
      <span>To be continued...</span>
    </div>
  );
};

export default Template;
