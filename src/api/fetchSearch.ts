import axios from 'axios';
import { API_KEY, API_URL, ResponseAPI, schemaResponseAPI } from './constants';
import { v4 as uuidv4 } from 'uuid';

export async function fetchSearch({
  request,
  language,
  pageSize,
  sortBy,
}: {
  request: string;
  language: string;
  pageSize: string;
  sortBy: string;
}) {
  const url = `${API_URL}/everything?q=${request}&language=${language}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  const { data } = await axios<ResponseAPI>(url);

  const articlesWithId = data.articles.map((article) => ({
    ...article,
    id: uuidv4(),
  }));

  return schemaResponseAPI.parse({
    ...data,
    articles: articlesWithId,
  });
}
