import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "ARIA state audit",
  description: "Inspect aria-selected and aria-checked in a real option list."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "ARIA state audit", {
  enableSearchFilter: true,
  text: "ARIA state audit",
  groupBy: "category",
  selectGroup: true,
  badgeShowLimit: 3,
  maxHeight: 180
});
