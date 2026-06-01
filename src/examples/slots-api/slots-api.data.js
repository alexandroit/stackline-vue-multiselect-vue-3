import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Slots API",
  description: "Customize option rows, badges, and group headers with scoped slots."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Slots API", {
  enableSearchFilter: true,
  text: "Slots API"
});
