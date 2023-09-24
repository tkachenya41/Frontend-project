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
  const [error, setError] = useState("");
  useEffect(() => {
    fetchSearch({ request: encodedSearch })
      .then((data) => {
        const fetchedData = schemaResponseAPI.parse(data);
        setArticles(fetchedData.articles);
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
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <SearchPanel></SearchPanel>
        <button className={Styles.home}>
          <Link href="/">Go home</Link>
        </button>

        <Articles articles={articles}></Articles>
      </div>
    </main>
  );
}
