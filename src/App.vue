<template>
  <main class="app-shell">
    <header class="app-header">
      <div>
        <p>Vue 3.5.35 runtime</p>
        <h1>@stackline/vue-multiselect-dropdown 3.1.0</h1>
      </div>
      <a href="https://www.npmjs.com/package/@stackline/vue-multiselect-dropdown" target="_blank" rel="noreferrer">npm</a>
    </header>

    <div class="app-layout">
      <aside class="app-nav">
        <a
          v-for="route in routes"
          :key="route.slug"
          :href="'#/' + route.slug"
          :class="{ active: route.slug === currentRoute.slug }"
        >
          {{ route.title }}
        </a>
      </aside>

      <component :is="currentRoute.component" />
    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { routes } from './app/routes';

function readSlug() {
  return window.location.hash.replace(/^#\/?/, '') || 'basic';
}

const slug = ref(readSlug());
const currentRoute = computed(() => routes.find((route) => route.slug === slug.value) || routes[0]);

function syncRoute() {
  slug.value = readSlug();
}

onMounted(() => window.addEventListener('hashchange', syncRoute));
onBeforeUnmount(() => window.removeEventListener('hashchange', syncRoute));
</script>
