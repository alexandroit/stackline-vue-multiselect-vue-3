import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Group By",
  description: "Group options by region and toggle entire groups."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Group By", {
  enableSearchFilter: true,
  text: "Group By",
  groupBy: "region",
  selectGroup: true,
  badgeShowLimit: 3
});
