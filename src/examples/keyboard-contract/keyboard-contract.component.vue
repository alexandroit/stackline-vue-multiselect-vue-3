<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="keyboard-grid">
      <div class="keyboard-panel">
        <h2>Keyboard switches</h2>
        <div class="toggle-grid">
          <button v-for="feature in features" :key="feature.key" type="button" :class="{ active: keyboard[feature.key] }" @click="keyboard[feature.key] = !keyboard[feature.key]">
            {{ feature.label }}
          </button>
        </div>
        <div class="toggle-grid">
          <button type="button" :class="{ active: spaceOptionAction === 'toggle' }" @click="spaceOptionAction = 'toggle'">Space toggles current</button>
          <button type="button" :class="{ active: spaceOptionAction === 'toggle-and-next' }" @click="spaceOptionAction = 'toggle-and-next'">Space toggles + next</button>
        </div>
        <p>{{ scenario }}</p>
      </div>
      <VueMultiselectDropdown
        :data="countries"
        v-model="selected"
        :settings="settings"
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
      />
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './keyboard-contract.data';
import componentSource from './keyboard-contract.component.vue?raw';
import dataSource from './keyboard-contract.data.js?raw';
import styleSource from './keyboard-contract.component.css?raw';
import './keyboard-contract.component.css';

const selected = ref(countries.slice(0, 3));
const events = ref([]);
const spaceOptionAction = ref('toggle');
const keyboard = reactive({
  space: true,
  tab: true,
  arrows: true,
  escape: true,
  backspaceRemovesLastWhenSearchEmpty: false,
  deleteRemovesFocusedBadge: true
});
const features = [
  { key: 'space', label: 'Space' },
  { key: 'tab', label: 'Tab' },
  { key: 'arrows', label: 'Arrows' },
  { key: 'escape', label: 'Escape' },
  { key: 'backspaceRemovesLastWhenSearchEmpty', label: 'Empty search Backspace' },
  { key: 'deleteRemovesFocusedBadge', label: 'Focused badge Delete' }
];
const settings = computed(() => makeSettings('classic', 'Keyboard contract', {
  groupBy: 'category',
  selectGroup: true,
  badgeShowLimit: 3,
  keyboard: { ...keyboard, spaceOptionAction: spaceOptionAction.value }
}));
const scenario = computed(() => spaceOptionAction.value === 'toggle-and-next'
  ? 'Space on an option toggles it and moves to the next enabled option.'
  : 'Space on an option toggles itself and keeps focus there.');
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}
</script>
