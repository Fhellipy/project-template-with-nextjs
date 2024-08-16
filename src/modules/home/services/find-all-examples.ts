import { api } from "@shared/config/api";
import { type ExampleType } from "../types";

export async function getAllExamples(): Promise<ExampleType[]> {
  const response = await api.get({
    url: "/examples",
    guard: {
      validate: (data): data is ExampleType[] => Array.isArray(data),
      error: new Error("Algum erro ocorreu ao buscar exemplos"),
    },
  });

  return response;
}
