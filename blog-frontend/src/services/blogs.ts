import axios from "axios";
const baseUrl = "http://localhost:5000/api/blogs";

let token: string | null = null;

const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response: { data: any }) => response.data);
};

const createNewBlog = async (newObject: any) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  console.log("Token", token);

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, createNewBlog };
