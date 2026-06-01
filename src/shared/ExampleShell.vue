<template>
  <section class="example-page">
    <header class="example-head">
      <div>
        <p>Live example</p>
        <h2>{{ meta.title }}</h2>
        <span>{{ meta.description }}</span>
      </div>
      <a :href="stackblitzUrl" target="_blank" rel="noreferrer">Open this route in StackBlitz</a>
    </header>

    <article class="example-card">
      <div class="preview-cell">
        <slot />
        <section v-if="events.length" class="event-log" aria-label="Recent events">
          <strong>Events</strong>
          <ol>
            <li v-for="event in events" :key="event">{{ event }}</li>
          </ol>
        </section>
      </div>
      <SourcePanels :sources="sources" />
    </article>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import SourcePanels from './SourcePanels.vue';

const props = defineProps({
  meta: {
    type: Object,
    required: true
  },
  sources: {
    type: Object,
    required: true
  },
  events: {
    type: Array,
    default: () => []
  }
});

const stackblitzUrl = computed(() => {
  const slug = window.location.hash.replace(/^#\/?/, '') || 'basic';
  const file = encodeURIComponent('src/examples/' + slug + '/' + slug + '.component.vue');
  return 'https://stackblitz.com/github/alexandroit/stackline-vue-multiselect-vue-3?file=' + file + '&startScript=start&initialpath=%2F' + slug;
});
</script>
