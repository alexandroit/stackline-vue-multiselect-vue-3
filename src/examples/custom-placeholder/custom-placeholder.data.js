import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Custom placeholder",
  description: "Customize the placeholder while keeping vertical centering."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Pick deployment markets", {
  enableSearchFilter: true,
  text: "Pick deployment markets",
  badgeShowLimit: 3
});
