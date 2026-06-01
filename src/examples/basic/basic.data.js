import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Basic usage",
  description: "Essential setup with a controlled v-model value."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Basic usage", {
  enableSearchFilter: true,
  text: "Basic usage",
  badgeShowLimit: 3
});
