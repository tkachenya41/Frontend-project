import axios from "axios";
import { API_KEY, API_URL, ResponseAPI } from "./constants";

export async function fetchNews(): Promise<ResponseAPI> {
  const url = `${API_URL}top-headlines?language=en&pageSize=18&apiKey=${API_KEY}`;
  const { data } = await axios<ResponseAPI>(url);
  return data;
}
