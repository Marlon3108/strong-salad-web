/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Peligrosamente permite que la producción se complete incluso si
    // el proyecto tiene errores de tipo.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar errores de linter durante el build para evitar bloqueos
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
