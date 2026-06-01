import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Search and add new item",
  description: "Create a new option from the current filter text."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search and add new item", {
  enableSearchFilter: true,
  text: "Search and add new item",
  addNewItemOnFilter: true,
  addNewButtonText: "Add country"
});
