declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "staging" | "production";
      NEXT_PUBLIC_E_COMMERCE_MAINTENANCE: string;
      NEXT_PUBLIC_HOST: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}
