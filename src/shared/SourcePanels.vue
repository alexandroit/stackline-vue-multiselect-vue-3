<template>
  <div class="source-grid">
    <section>
      <strong>Vue</strong>
      <pre>{{ sources.component }}</pre>
    </section>
    <section>
      <strong>Data</strong>
      <pre>{{ sources.data }}</pre>
    </section>
    <section>
      <strong>CSS</strong>
      <pre>{{ sources.css || '/* No custom CSS for this example. */' }}</pre>
    </section>
  </div>
</template>

<script setup>
defineProps({
  sources: {
    type: Object,
    required: true
  }
});
</script>
