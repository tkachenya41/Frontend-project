import { SearchState } from "./Search.types";

export function getDefaultFormValues(): SearchState {
  return { request: "" };
}
