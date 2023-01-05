import { useQuery } from "react-query";

import { getUsers, Users } from "api/users";
import TemplateIcon from "assets/images/react-template.svg";

import styles from "./styles.css";

const Template = () => {
  const { data, isLoading, error } = useQuery<Users[], Error>(
    "users",
    getUsers
  );

  console.log(data, error?.cause);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.title}>
        <TemplateIcon className={styles.logo} width={68} height={68} />
        <h1 className={styles.titleText}>React Template</h1>
      </div>
      <div>
        {data?.map(item => (
          <code key={item.id}>{JSON.stringify(data[0], null, 2)}</code>
        ))}
      </div>
    </div>
  );
};

export default Template;
