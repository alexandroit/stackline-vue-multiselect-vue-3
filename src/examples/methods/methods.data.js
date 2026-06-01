import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Methods",
  description: "Open, close, focus search, select all, and clear through refs."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Methods", {
  enableSearchFilter: true,
  text: "Methods"
});
