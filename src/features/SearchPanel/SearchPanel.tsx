"use client";
import SearchStyle from "./SearchPanel.module.scss";
import { SearchState } from "./Search.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getDefaultFormValues } from "./Search.utils";

export function SearchPanel() {
  const router = useRouter();
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const encodedSearch = encodeURI(formState.request);
    router.push(`/search?q=${encodedSearch}`);
  };
  const [formState, setFormState] = useState<SearchState>(
    getDefaultFormValues()
  );

  return (
    <form className={SearchStyle.form} onSubmit={handleSubmit}>
      <input
        className={SearchStyle.input}
        value={formState.request}
        placeholder="Search news..."
        onChange={({ target: { value } }) => {
          setFormState({ request: value });
        }}
      />
      <button className={SearchStyle.submit} type="submit">
        <img src="/search.svg" alt="" />
      </button>
    </form>
  );
}
