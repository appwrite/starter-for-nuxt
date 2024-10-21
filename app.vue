<template>

  <head>
    <title>Appwrite starter</title>
  </head>
  <main class="u-flex u-flex-vertical u-padding-20 u-cross-center u-gap-32 checker-background"
    :style="{ marginBottom: detailHeight + 'px' }">
    <div class="connection-visual">
      <div class="outer-card">
        <div class="inner-card">
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5861_17926)">
              <path
                d="M17.9523 27.1998H29.848C30.2259 27.1998 30.597 27.0964 30.9243 26.8998C31.2515 26.7031 31.5232 26.4203 31.712 26.0798C31.9008 25.7392 32.0002 25.3529 32 24.9597C31.9998 24.5665 31.9002 24.1803 31.711 23.8399L23.7222 9.43993C23.5334 9.09945 23.2618 8.81668 22.9346 8.62009C22.6075 8.42353 22.2364 8.32 21.8586 8.32C21.4809 8.32 21.1097 8.42353 20.7826 8.62009C20.4555 8.81668 20.1838 9.09945 19.995 9.43993L17.9523 13.1244L13.9584 5.91954C13.7695 5.5791 13.4977 5.29638 13.1705 5.09982C12.8432 4.90329 12.4721 4.7998 12.0943 4.7998C11.7164 4.7998 11.3453 4.90329 11.0181 5.09982C10.6908 5.29638 10.4191 5.5791 10.2301 5.91954L0.288942 23.8399C0.0998197 24.1803 0.000164599 24.5665 2.03726e-07 24.9597C-0.000164192 25.3529 0.0991677 25.7392 0.288005 26.0798C0.476843 26.4203 0.748526 26.7031 1.07573 26.8998C1.40294 27.0964 1.77413 27.1998 2.15196 27.1998H9.61913C12.5777 27.1998 14.7595 25.8474 16.2608 23.2089L19.9057 16.6399L21.858 13.1244L27.7172 23.6843H19.9057L17.9523 27.1998ZM9.49739 23.6807L4.28626 23.6794L12.0977 9.60035L15.9954 16.6399L13.3857 21.345C12.3887 23.0569 11.2561 23.6807 9.49739 23.6807Z"
                fill="#00DC82" />
            </g>
            <defs>
              <clipPath id="clip0_5861_17926">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
      </div>
      <div class="connection-line u-flex u-cross-center" :style="{
        opacity: status === 'success' ? 1 : 0,
        transition: 'opacity 2.5s',
      }">
        <div class="line-left"></div>
        <div class="u-flex u-main-center u-border-radius-circle tick-container">
          <span class="icon-check" style="color: #fd366e;"></span>
        </div>
        <div class="line-right"></div>
      </div>
      <div class="outer-card">
        <div class="inner-card">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M71.9999 52.1996V68.3996H31.6713C19.9219 68.3996 9.663 61.8843 4.17426 52.1996C3.37635 50.7917 2.67799 49.3145 2.09218 47.7814C0.942204 44.7771 0.219318 41.5533 0 38.1895V33.8097C0.0476152 33.06 0.122645 32.3163 0.220761 31.5814C0.421322 30.0733 0.724328 28.5977 1.12256 27.1632C4.88994 13.5641 17.14 3.59961 31.6713 3.59961C46.2026 3.59961 58.4512 13.5641 62.2186 27.1632H44.9747C42.1438 22.7303 37.2437 19.7996 31.6713 19.7996C26.0989 19.7996 21.1989 22.7303 18.3679 27.1632C17.5051 28.5108 16.8356 29.9968 16.3969 31.5814C16.0074 32.9864 15.7996 34.468 15.7996 35.9996C15.7996 40.6431 17.7129 44.8286 20.7804 47.7814C23.6229 50.5222 27.4552 52.1996 31.6713 52.1996H71.9999Z"
              fill="#FD366E" />
            <path
              d="M72.0002 31.583V47.783H42.5625C45.6301 44.8302 47.5433 40.6447 47.5433 36.0012C47.5433 34.4696 47.3356 32.988 46.946 31.583H72.0002Z"
              fill="#FD366E" />
          </svg>
        </div>
      </div>
    </div>
    <section class="u-flex u-flex-vertical u-main-center u-cross-center u-padding-16 u-text-center"
      style="backdrop-filter: blur(1px);">
      <div v-if="status === 'loading'" class="u-flex u-cross-center u-gap-16">
        <div class="loader is-small"></div>
        <h1 class="heading-level-7">Waiting for connection...</h1>
      </div>
      <h1 v-else-if="status === 'success'" class="heading-level-5">Congratulations!</h1>

      <h1 v-else class="heading-level-5">Check connection</h1>
      <p class="body-text-2">
        <span v-if="status === 'success'">
          You connected your app successfully.
        </span>
        <span v-else-if="status === 'error' || status === 'idle'">
          Send a ping to verify the connection
        </span>
      </p>
      <button @click="sendPing" class="button u-margin-block-start-32" v-show="status === 'error' || status === 'idle'">
        <span>Send a ping</span>
      </button>
    </section>
    <nav class="u-grid">
      <ul class="u-flex u-flex-wrap u-main-center u-gap-32">
        <li class="card u-max-width-300 u-flex-vertical u-gap-8" style="--p-card-padding: 1em">
          <h2 class="heading-level-7">Edit your app</h2>
          <p class="body-text-2">
            Edit <code class="inline-code">app.vue</code> to get started with building
            your app
          </p>
        </li>
        <li class="card u-max-width-300" style="--p-card-padding: 1em">
          <a href="https://cloud.appwrite.io" target="_blank" rel="noopener noreferrer" class="u-flex-vertical u-gap-8">
            <div class="u-flex u-main-space-between u-cross-center">
              <h2 class="heading-level-7">Go to console</h2>
              <span class="icon-arrow-right" style="color: hsl(var(--color-neutral-15));"></span>
            </div>
            <p class="body-text-2">
              Start managing your project from the Appwrite console
            </p>
          </a>
        </li>
        <li class="card u-max-width-300" style="--p-card-padding: 1em">
          <a href="https://appwrite.io/docs" target="_blank" rel="noopener noreferrer" class="u-flex-vertical u-gap-8">
            <div class="u-flex u-main-space-between u-cross-center">
              <h2 class="heading-level-7">Explore docs</h2>
              <span class="icon-arrow-right" style="color: hsl(var(--color-neutral-15));"></span>
            </div>
            <p class="body-text-2">
              Discover the full power of Appwrite by diving into our documentation
            </p>
          </a>
        </li>
      </ul>
    </nav>
    <aside class="collapsible u-width-full-line u-position-fixed"
      style="border: 1px solid hsl(var(--color-neutral-10)); bottom: 0; max-height: 60dvh;">
      <div class="collapsible-item">
        <details class="collapsible-wrapper u-padding-0" style="background-color: hsl(var(--color-neutral-0));"
          :open="showLogs" @toggle="onToggle" ref="detailsRef">
          <summary class="collapsible-button u-padding-16">
            <span class="text">Logs</span>
            <template v-if="logs.length > 0">
              <span class="collapsible-button-optional">
                <span class="inline-tag">
                  <span class="text">{{ logs.length }}</span>
                </span>
              </span>
            </template>
            <div class="icon">
              <span class="icon-cheveron-down" aria-hidden="true"></span>
            </div>
          </summary>
          <div class="collapsible-content u-flex u-flex-vertical-mobile u-cross-stretch u-padding-0">
            <div class="table is-table-row-medium-size u-stretch" style="--p-border-radius: 0; inline-size: unset;">
              <div class="table-thead" style="background-color: hsl(var(--color-neutral-5));">
                <div class="table-row">
                  <div class="table-thead-col">
                    <span class="u-color-text-offline">Project</span>
                  </div>
                </div>
              </div>
              <div class="grid-box u-padding-16" style="
                  --grid-gap: 1rem;
                  --grid-item-size-small-screens: 10rem;
                  --grid-item-size: 10rem;
                  background-color: hsl(var(--color-neutral-0));
                ">
                <div class="u-grid u-grid-vertical u-gap-8">
                  <p class="u-color-text-offline">Endpoint</p>
                  <p class="body-text-2">{{ appwriteEndpoint }}</p>
                </div>
                <div class="u-grid u-grid-vertical u-gap-8">
                  <p class="u-color-text-offline">Project ID</p>
                  <p class="body-text-2">{{ appwriteProjectId }}</p>
                </div>
                <div class="u-grid u-grid-vertical u-gap-8">
                  <p class="u-color-text-offline">Project name</p>
                  <p class="body-text-2">{{ appwriteProjectName }}</p>
                </div>
                <div class="u-grid u-grid-vertical u-gap-8">
                  <p class="u-color-text-offline">Version</p>
                  <p class="body-text-2">{{ appwriteVersion }}</p>
                </div>
              </div>
            </div>
            <table class="table is-table-row-small-size" style="--p-border-radius: 0; flex: 2;">
              <thead class="table-thead" style="background-color: hsl(var(--color-neutral-5));">
                <tr class="table-row u-grid" style="
                    grid-template-columns: 3fr 2fr 2fr 2fr 5fr;
                    min-block-size: unset;
                  ">
                  <template v-if="logs.length > 0">
                    <th class="table-thead-col">
                      <span class="u-color-text-offline">Date</span>
                    </th>
                    <th class="table-thead-col">
                      <span class="u-color-text-offline">Status</span>
                    </th>
                    <th class="table-thead-col">
                      <span class="u-color-text-offline">Method</span>
                    </th>
                    <th class="table-thead-col">
                      <span class="u-color-text-offline">Path</span>
                    </th>
                    <th class="table-thead-col">
                      <span class="u-color-text-offline">Response</span>
                    </th>
                  </template>
                  <template v-else>
                    <th class="table-thead-col">
                      <span class="u-color-text-offline">Logs</span>
                    </th>
                  </template>
                </tr>
              </thead>

              <tbody class="table-tbody u-flex u-flex-vertical u-font-code u-overflow-y-auto" style="max-height: 16em;">
                <tr v-if="logs.length === 0" class="table-row u-height-auto" style="min-block-size: unset;">
                  <td class="table-col u-flex u-cross-center u-padding-16" colspan="5">
                    <p class="u-color-text-offline">
                      There are no logs to show
                    </p>
                  </td>
                </tr>
                <tr v-else v-for="(log, index) in logs" :key="index" class="table-row u-grid u-height-auto" style="
        grid-template-columns: 3fr 2fr 2fr 2fr 5fr;
        min-block-size: unset;
      ">
                  <td class="table-col u-flex u-cross-center" data-title="Date">
                    <time class="text">
                      {{
                        log.date.toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      }}
                    </time>
                  </td>
                  <td class="table-col u-flex u-cross-center" data-title="Status">
                    <span class="tag" :class="{
                      'is-warning': log.status >= 400,
                      'is-success': log.status < 400,
                    }">
                      {{ log.status }}
                    </span>
                  </td>
                  <td class="table-col u-flex u-cross-center" data-title="Method">
                    <span class="text">{{ log.method }}</span>
                  </td>
                  <td class="table-col u-flex u-cross-center" data-title="Path">
                    <span class="text">{{ log.path }}</span>
                  </td>
                  <td class="table-col u-flex u-cross-center" data-title="Response">
                    <code class="inline-code u-un-break-text u-overflow-x-auto">{{ log.response }}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </aside>
  </main>
</template>

<script setup>
import { client } from '~/lib/appwrite';
import { AppwriteException } from 'appwrite';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();

const {
  appwriteEndpoint,
  appwriteProjectId,
  appwriteProjectName,
  appwriteVersion,
} = config.public;

const detailHeight = ref(0);
const logs = ref([]);
const status = ref('idle');
const showLogs = ref(false);
const detailsRef = ref(null);

async function sendPing() {
  console.log("Ping!")
  if (status.value === 'loading') return;
  status.value = 'loading';
  try {
    const result = await client.ping();
    const log = {
      date: new Date(),
      method: 'GET',
      path: '/v1/ping',
      status: 200,
      response: JSON.stringify(result),
    };
    logs.value = [log, ...logs.value];
    status.value = 'success';
  } catch (err) {
    const log = {
      date: new Date(),
      method: 'GET',
      path: '/v1/ping',
      status: err instanceof AppwriteException ? err.code : 500,
      response:
        err instanceof AppwriteException
          ? err.message
          : 'Something went wrong',
    };
    logs.value = [log, ...logs.value];
    status.value = 'error';
  } finally {
    showLogs.value = true;
  }
}

function onToggle(event) {
  showLogs.value = event.target.open;
}

let resizeObserver;

onMounted(() => {
  if (detailsRef.value) {
    resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        detailHeight.value = entry.contentRect.height;
      }
    });
    resizeObserver.observe(detailsRef.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver && detailsRef.value) {
    resizeObserver.unobserve(detailsRef.value);
  }
});
</script>
