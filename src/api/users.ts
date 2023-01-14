import { get } from "utils/request";

export type Users = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => get<Users[]>(USERS_URL);
