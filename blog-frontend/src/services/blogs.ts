import axios from "axios";
const baseUrl = "http://localhost:5000/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response: { data: any }) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
