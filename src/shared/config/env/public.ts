type PublicEnv = {
  E_COMMERCE_MAINTENANCE: string;
  HOST: string;
  API_URL: string;
};

export const publicEnv: PublicEnv = {
  E_COMMERCE_MAINTENANCE:
    process.env.NEXT_PUBLIC_E_COMMERCE_MAINTENANCE ?? "false",
  HOST: process.env.NEXT_PUBLIC_HOST ?? "http://localhost:3000",
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api",
};
