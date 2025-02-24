// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appwriteEndpoint: process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT,
      appwriteProjectId: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID,
      appwriteProjectName: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_NAME,
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/app.css',
    '@appwrite.io/pink',
    '@appwrite.io/pink-icons',
  ],
})
