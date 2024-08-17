/**
 * @type {import('next').NextConfig}
 */
const nextConfig = () => {
  const defaultNextJSConfig = {
    reactStrictMode: true,
    output: "standalone",
  };

  return defaultNextJSConfig;
};

export default nextConfig;
