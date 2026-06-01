import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Lazy Loading from API",
  description: "Append rows when the list reaches the bottom."
};
export const dataSeed = largeList;
export const selectedSeed = largeList.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Lazy Loading from API", {
  enableSearchFilter: true,
  text: "Lazy Loading from API",
  lazyLoading: true,
  maxHeight: 145,
  badgeShowLimit: 3
});
