import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Custom search from API",
  description: "Search against a locally simulated API response."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Custom search from API", {
  enableSearchFilter: true,
  text: "Custom search from API",
  searchBy: [
    "itemName",
    "capital"
  ],
  loadingText: "Loading countries..."
});
