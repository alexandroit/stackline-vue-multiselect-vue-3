import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Multiple dropdowns",
  description: "Independent values and settings on one page."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Multiple dropdowns", {
  enableSearchFilter: true,
  text: "Multiple dropdowns"
});
