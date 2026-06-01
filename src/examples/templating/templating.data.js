import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Templating",
  description: "Use render functions for option and badge content."
};
export const dataSeed = metricItems;
export const selectedSeed = metricItems.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Templating", {
  enableSearchFilter: true,
  text: "Templating",
  badgeShowLimit: 3
});
