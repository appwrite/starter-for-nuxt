# Appwrite Starter for Nuxt

This project serves as a starter template for integrating [Appwrite](https://appwrite.io) with [Nuxt 3](https://nuxt.com), featuring modern development tools such as TypeScript and Prettier.

## Documentation

- [Appwrite Documentation](https://appwrite.io/docs) – Learn more about Appwrite, its services, and how to work with it.
- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction) – Get started with Nuxt 3, its features, and how to use it.

## Features

This project includes:

- **[Nuxt 3](https://nuxt.com)**: A modern and intuitive Vue.js framework for server-side rendered applications.
- **[Nuxt UI](https://ui.nuxt.com)**: A powerful UI library built for Nuxt applications.
- **[Prettier](https://prettier.io/)**: A code formatter to enforce consistent style throughout your codebase.
- **[TypeScript](https://www.typescriptlang.org/)**: A strict syntactical superset of JavaScript, ensuring type safety.

## Setup

To get started with the project, follow these steps:

### 1. Install Dependencies

Make sure you have one of the following package managers installed:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 2. Environment Setup

Copy the `.env.example` file to `.env` and update it with your Appwrite credentials:

```bash
cp .env.example .env
```

Fill in the required fields in the `.env` file:
- `APPWRITE_URL`: The URL of your Appwrite instance.
- `APPWRITE_PROJECT_ID`: The Project ID from your Appwrite project.

## Development Server

Run the development server at [http://localhost:3000](http://localhost:3000):

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Hot Module Replacement (HMR)

During development, Nuxt provides Hot Module Replacement, meaning the page will automatically reload when you make changes to the code.

## Production

To build the application for production, run:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

### Preview Production Build

Once built, you can preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

### Deployment

To deploy your application, refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment). It includes details for various platforms and deployment strategies such as Vercel, Netlify, or server-based setups.
