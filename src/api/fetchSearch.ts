import axios from 'axios';
import { API_KEY, API_URL, ResponseAPI } from './constants';
import { v4 as uuidv4 } from 'uuid';

export async function fetchSearch({
  request,
}: {
  request: string;
}): Promise<ResponseAPI> {
  const url = `${API_URL}/everything?q=${request}&pageSize=20&apiKey=${API_KEY}`;
  const { data } = await axios<ResponseAPI>(url);

  const articlesWithId = data.articles.map((article) => ({
    ...article,
    id: uuidv4(),
  }));

  return {
    ...data,
    articles: articlesWithId,
  };
}
