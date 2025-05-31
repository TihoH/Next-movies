import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ['image.tmdb.org'], // ← Разрешаем загрузку картинок с этого домена
  },
  
};

export default nextConfig;
