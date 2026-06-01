import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Headless + ARIA",
  description: "Own 100% of the HTML while Stackline supplies state and ARIA prop getters."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Headless and ARIA", {
  enableSearchFilter: true,
  text: "Headless and ARIA"
});
