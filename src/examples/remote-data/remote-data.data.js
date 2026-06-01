import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Data from remote API",
  description: "Replace the data array after a simulated request."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Data from remote API", {
  enableSearchFilter: true,
  text: "Data from remote API",
  badgeShowLimit: 3
});
