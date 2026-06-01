import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Load dynamic data",
  description: "Swap the available objects while preserving selected values."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Load dynamic data", {
  enableSearchFilter: true,
  text: "Load dynamic data",
  badgeShowLimit: 3
});
