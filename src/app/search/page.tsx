"use client";

import { useEffect, useState } from "react";
import { fetchSearch } from "../api/fetchSearch";
import Image from "next/image";
import { SearchPanel } from "@/features/SearchPanel/SearchPanel";
import Link from "next/link";
import { Articles } from "@/features/Articles/Articles";
import { ArticleAPI, schemaArticleAPI } from "@/entities/Article";
import Styles from "../page.module.scss";
import { useSearchParams } from "next/navigation";
import { schemaResponseAPI } from "../api/constants";
import { z } from "zod";

export default function SearchPage() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearch = encodeURI(searchQuery || "");
  const [articles, setArticles] = useState<ArticleAPI[]>([]);
  const [totalResults, setTotalResults] = useState<number>(1);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchSearch({ request: encodedSearch })
      .then((data) => {
        // const fetchedData = schemaResponseAPI.parse(data);
        // setArticles(fetchedData.articles);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      })
      .catch((err) => {
        if (err instanceof z.ZodError) {
          setError("Maybe mistaske is connected with invalid type");
        }
        setError(err);
      });
  }, [encodedSearch]);
  return (
    <main className={Styles.main}>
      <div className={Styles.center}>
        <div className={Styles.panel}>
          <button className={Styles.home}>
            <Link href="/">Go home</Link>
          </button>
          <SearchPanel></SearchPanel>
        </div>
        {totalResults < 1 && (
          <div className={Styles.noResult}>
            <img className={Styles.sadSmile} src="/sadSmile.svg"></img>
            <h1>
              Not Found... <hr /> Try again later
            </h1>
          </div>
        )}
        <Articles articles={articles}></Articles>
      </div>
    </main>
  );
}
