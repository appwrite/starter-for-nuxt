// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  // Compatibility with the specified Nuxt version date
  compatibilityDate: '2024-09-09',

  devtools: {
    enabled: true, // Enable devtools for development
  },

  runtimeConfig: {
    public: {
      // Load from environment variables with fallback to empty strings
      appwriteUrl: process.env.APPWRITE_URL || '',
      appwriteProjectId: process.env.APPWRITE_PROJECT_ID || '',
    },
  },
});
