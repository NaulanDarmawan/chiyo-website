// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: '.',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    // Ganti 'nama-repo' dengan nama repository GitHub-mu nanti
    baseURL: '/chiyo-website/',
    head: {
      title: 'CHIYO Creative Fun House',
      meta: [{ name: 'description', content: 'Creative Studio 2D & 3D' }]
    }
  },

  tailwindcss: {
    // Paksa tailwind untuk melihat file JSON agar col-span & row-span terdeteksi
    configPath: 'tailwind.config.js',
    exposeConfig: true,
  },

  // Penting untuk SEO & GitHub Pages (SSG Mode)
  ssr: true,
  nitro: {
    serveStatic: true,
  },

  // Agar komponen di folder bento otomatis terbaca
  components: [
    { path: '~/components/bento', pathPrefix: false },
    { path: '~/components', pathPrefix: false },
  ]
})