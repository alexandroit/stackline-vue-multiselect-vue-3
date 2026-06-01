import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "All visible counter",
  description: "Prove the +N badge disappears when all badges are visible."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 6);
export const settingsSeed = makeSettings("classic", "All visible counter", {
  enableSearchFilter: false,
  text: "All visible counter",
  badgeShowLimit: 12
});
