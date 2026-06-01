import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Virtual Scrolling",
  description: "Large data set with a constrained accessible list."
};
export const dataSeed = largeList;
export const selectedSeed = largeList.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Virtual Scrolling", {
  enableSearchFilter: true,
  text: "Virtual Scrolling",
  maxHeight: 145,
  badgeShowLimit: 3
});
