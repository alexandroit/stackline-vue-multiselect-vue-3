import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Disabled state",
  description: "Toggle disabled state without changing data."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Disabled state", {
  enableSearchFilter: true,
  text: "Disabled state",
  disabled: true,
  badgeShowLimit: 3
});
