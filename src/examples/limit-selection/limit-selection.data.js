import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Limit selection",
  description: "Prevent selecting more than the configured limit."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Limit selection", {
  enableSearchFilter: true,
  text: "Limit selection",
  limitSelection: 2,
  badgeShowLimit: 2
});
