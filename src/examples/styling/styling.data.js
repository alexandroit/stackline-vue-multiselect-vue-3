import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Styling",
  description: "Switch skins and use CSS variables for a custom brand surface."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Styling", {
  enableSearchFilter: true,
  text: "Styling"
});
