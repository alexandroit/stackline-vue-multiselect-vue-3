<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="headless-picker" v-bind="dropdown.getRootProps()">
      <header class="headless-header">
        <span>Product-owned HTML</span>
        <button v-bind="dropdown.getClearAllButtonProps({ class: 'headless-clear' })">Clear all</button>
      </header>
      <button v-bind="dropdown.getTriggerProps({ class: 'headless-trigger' })">
        <span>
          <small>Deployment markets</small>
          <strong>{{ label }}</strong>
        </span>
        <b>{{ isOpen ? 'Open' : 'Closed' }}</b>
      </button>
      <div class="headless-selected" aria-live="polite">
        <span v-for="item in visibleBadges" :key="dropdown.getItemKey(item)" class="headless-chip">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ dropdown.getItemLabel(item) }}
          <button v-bind="dropdown.getRemoveButtonProps(item, { class: 'headless-remove' })">x</button>
        </span>
        <span v-if="hiddenBadgeCount" class="headless-counter">+{{ hiddenBadgeCount }}</span>
      </div>
      <div v-if="isOpen" class="headless-menu">
        <input v-bind="dropdown.getSearchInputProps({ class: 'headless-search', placeholder: 'Search countries' })" />
        <div v-bind="dropdown.getListboxProps({ class: 'headless-list' })">
          <div
            v-for="option in visibleOptions"
            :key="option.key"
            v-bind="dropdown.getOptionProps(option, { class: ['headless-option', { selected: option.selected }] })"
          >
            <span class="headless-check" :data-checked="option.selected ? 'true' : 'false'"></span>
            <span :class="countryOptionClass(option.item.flag)" aria-hidden="true"></span>
            <span>
              <strong>{{ option.label }}</strong>
              <small>{{ option.item.region }}</small>
            </span>
            <code>aria-selected={{ option.selected }} aria-checked={{ option.selected }}</code>
          </div>
        </div>
      </div>
    </section>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, makeSettings } from '../../shared/settings';
import { meta } from './headless-aria.data';
import componentSource from './headless-aria.component.vue?raw';
import dataSource from './headless-aria.data.js?raw';
import styleSource from './headless-aria.component.css?raw';
import './headless-aria.component.css';

const selected = ref(countries.slice(0, 3));
const events = ref([]);
const dropdown = useMultiSelectDropdown({
  data: countries,
  selectedItems: selected,
  onChange(items) {
    selected.value = items;
    events.value.unshift('headless change: ' + items.length + ' selected');
  },
  settings: makeSettings('classic', 'Choose countries', {
    enableSearchFilter: true,
    groupBy: 'category',
    selectGroup: true,
    badgeShowLimit: 2,
    clearAll: true,
    ariaLabel: 'Headless countries'
  })
});
const label = dropdown.label;
const isOpen = dropdown.isOpen;
const visibleBadges = dropdown.visibleBadges;
const hiddenBadgeCount = dropdown.hiddenBadgeCount;
const visibleOptions = dropdown.visibleOptions;
const sources = { component: componentSource, data: dataSource, css: styleSource };
</script>
