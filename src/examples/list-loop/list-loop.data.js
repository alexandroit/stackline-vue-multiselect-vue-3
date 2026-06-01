import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Using in list for loop",
  description: "Render several dropdowns from one configuration list."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Using in list for loop", {
  enableSearchFilter: true,
  text: "Using in list for loop"
});
