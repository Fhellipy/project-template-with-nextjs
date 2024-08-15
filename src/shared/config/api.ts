import { ApiClient } from "@lib/fetch";
import { publicEnv } from "./env";

const BASE_API_URL = publicEnv.API_URL ?? "";
export const api: ApiClient = new ApiClient(BASE_API_URL);
