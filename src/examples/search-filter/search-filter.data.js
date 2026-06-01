import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Search filter",
  description: "Searchable list with select-all support."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search filter", {
  enableSearchFilter: true,
  text: "Search filter",
  badgeShowLimit: 3
});
