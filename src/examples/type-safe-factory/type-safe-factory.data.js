import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Typed helper API",
  description: "Use helper APIs to keep settings and composables consistent."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Typed helper API", {
  enableSearchFilter: true,
  text: "Typed helper API"
});
