// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appwriteEndpoint: 'https://cloud.appwrite.io/v1',
      appwriteProjectId: 'my-project-id',
      appwriteProjectName: 'My Project',
      appwriteVersion: '1.6.x',
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
