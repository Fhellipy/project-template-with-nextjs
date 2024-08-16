import { useQuery } from "@tanstack/react-query";
import { getAllExamples } from "../services";

export const EXAMPLES_QUERY_KEY = "EXAMPLES_QUERY_KEY";

export function useExamplesQuery() {
  return useQuery({
    queryKey: [EXAMPLES_QUERY_KEY],
    queryFn: getAllExamples,
  });
}
