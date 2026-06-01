import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Events",
  description: "Observe select, de-select, select-all, de-select-all, and change events."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Events", {
  enableSearchFilter: true,
  text: "Events",
  badgeShowLimit: 3
});
