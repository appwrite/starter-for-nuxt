import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1")
  .setProject(process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
