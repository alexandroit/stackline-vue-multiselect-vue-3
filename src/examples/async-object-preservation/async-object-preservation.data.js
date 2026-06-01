import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Async object preservation",
  description: "Selected object values remain stable when option data refreshes late."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Async object preservation", {
  enableSearchFilter: true,
  text: "Async object preservation",
  groupBy: "category",
  selectGroup: true,
  badgeShowLimit: 3,
  maxHeight: 180
});
