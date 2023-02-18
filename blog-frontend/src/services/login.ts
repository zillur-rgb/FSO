/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { CredentialsType } from "../components/LoginForm";

const baseUrl = "http://localhost:5000/api/login";
const login = async (credentials: CredentialsType) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
