import axios from "axios";
import User from "../interfaces/User";

let api: string = `${process.env.REACT_APP_API}/users`;

// login
export function checkUser(userToCheck: User) {
  return axios.get(
    `${api}?email=${userToCheck.email}&password=${userToCheck.password}`
  );
}

// register
export function addUser(newUser: User) {
  return axios.post(api, newUser);
}
