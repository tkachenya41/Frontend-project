"use client";
import Image from "next/image";
import Styles from "./page.module.scss";
import { SearchPanel } from "@/features/SearchPanel/SearchPanel";
import { useEffect, useState } from "react";
import { ArticleAPI } from "@/entities/Article";
import { fetchNews } from "./api/fetchNews";
import { Articles } from "@/features/Articles/Articles";
import { schemaResponseAPI } from "./api/constants";
import { z } from "zod";

export default function Home() {
  const [articles, setArticles] = useState<ArticleAPI[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchNews()
      .then((data) => setArticles(data.articles))
      .catch((err) => setError(err.message));
  }, [articles]);

  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        <SearchPanel></SearchPanel>
        <Articles articles={articles}></Articles>
      </div>
    </main>
  );
}
