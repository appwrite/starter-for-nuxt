declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPWRITE_URL: string;
      APPWRITE_PROJECT_ID: string;
    }
  }
}
export {};
