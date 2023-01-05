import { get } from "utils/request";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

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

export const getUsers = () => get<Users[]>(USERS_URL);
