<script setup lang="ts">
import { ref } from 'vue';
import { ID } from 'appwrite';
const { account } = useAppwrite();

// Define our page title
useHead({
  title: 'Starter for Nuxt',
});

// User type
type User = {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  accessedAt: string;
  email: string;
  emailVerification: false;
  labels: Array<string>;
  mfa: boolean;
  name: string;
  passwordUpdate: string;
  phone: string;
  phoneVerification: false;
  prefs: object;
  registration: string;
  status: true;
  targets: Array<string>;
};

// Using the user cookie to manage logged-in state
const loggedInUser = useCookie<User | null | undefined>('user');

// Reactive variables for form inputs
const email = ref<string>('');
const password = ref<string>('');
const name = ref<string>('');

const resetInputValues = (): void => {
  email.value = '';
  password.value = '';
  name.value = '';
};

// Login function with typed parameters
const login = async (email: string, password: string): Promise<void> => {
  try {
    await account.createEmailPasswordSession(email, password);
    loggedInUser.value = (await account.get()) as unknown as User;
    resetInputValues();
  } catch (error) {
    console.error('Login failed', error);
  }
};

// Register function with proper typing
const register = async (): Promise<void> => {
  try {
    await account.create(ID.unique(), email.value, password.value, name.value);
    await login(email.value, password.value); // Log the user in after registering
    resetInputValues();
  } catch (error) {
    console.error('Registration failed', error);
  }
};

// Logout function
const logout = async (): Promise<void> => {
  try {
    await account.deleteSession('current');
    loggedInUser.value = null;
  } catch (error) {
    console.error('Logout failed', error);
  }
};
</script>

<template>
  <UCard class="h-screen">
    <UContainer class="w-full sm:w-6/12 lg:w-4/12">
      <template v-if="loggedInUser">
        <h1 class="text-3xl mb-3">Welcome, {{ loggedInUser.name }}! 👋</h1>

        <div>
          <UAlert
            title="Logged-In"
            color="primary"
            icon="i-heroicons-light-bulb"
          >
            <template #description>
              Logged in as {{ loggedInUser.name }}
            </template>
          </UAlert>
        </div>

        <div class="mt-3">
          <UButton color="orange" icon="i-heroicons-arrow-left" @click="logout">
            Log out
          </UButton>
        </div>
      </template>

      <template v-else>
        <h1 class="text-3xl mb-3">Login</h1>

        <UContainer class="space-y-4">
          <UInput
            v-model="email"
            type="email"
            placeholder="Enter your email..."
          />
          <UInput
            v-model="password"
            type="password"
            placeholder="Enter your password..."
          />
          <UInput v-model="name" type="text" placeholder="Enter your name..." />

          <div class="flex justify-between mt-3">
            <UButton
              icon="i-heroicons-user"
              type="button"
              name="Login"
              @click="($event) => login(email, password)"
            >
              Login
            </UButton>

            <UButton
              icon="i-heroicons-pencil"
              color="yellow"
              type="button"
              name="Register"
              @click="register"
            >
              Register
            </UButton>
          </div>
        </UContainer>
      </template>
    </UContainer>
  </UCard>
</template>
