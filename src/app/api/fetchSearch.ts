import axios from "axios";
import { API_KEY, API_URL, ResponseAPI } from "./constants";

export async function fetchSearch({
  request,
}: {
  request: string;
}): Promise<ResponseAPI> {
  try {
    const url = `${API_URL}/everything?q=${request}&pageSize=20&apiKey=${API_KEY}`;
    const { data } = await axios<ResponseAPI>(url);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
