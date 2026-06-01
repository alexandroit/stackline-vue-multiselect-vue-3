import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Template-style forms",
  description: "Keep form state in refs and derive validation."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Template-style forms", {
  enableSearchFilter: true,
  text: "Template-style forms",
  badgeShowLimit: 3
});
