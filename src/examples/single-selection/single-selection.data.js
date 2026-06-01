import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Single selection",
  description: "Single-value behavior without checkboxes."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("classic", "Single selection", {
  enableSearchFilter: true,
  text: "Single selection",
  singleSelection: true,
  showCheckbox: false,
  enableCheckAll: false
});
