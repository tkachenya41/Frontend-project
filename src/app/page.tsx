"use client";
import Styles from "./page.module.scss";
import { SearchPanel } from "@/features/SearchPanel/SearchPanel";
import { useEffect, useState } from "react";
import { ArticleAPI } from "@/entities/Article";
import { fetchNews } from "./api/fetchNews";
import { Articles } from "@/features/Articles/Articles";

export default function Home() {
  const [articles, setArticles] = useState<ArticleAPI[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchNews();
        setArticles(response.articles);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        <SearchPanel></SearchPanel>
        <Articles articles={articles}></Articles>
      </div>
    </main>
  );
}
