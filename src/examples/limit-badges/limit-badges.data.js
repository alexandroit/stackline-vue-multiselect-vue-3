import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Limit badges",
  description: "Show a stable +N counter only for hidden selected badges."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 8);
export const settingsSeed = makeSettings("classic", "Limit badges", {
  enableSearchFilter: true,
  text: "Limit badges",
  badgeShowLimit: 2
});
