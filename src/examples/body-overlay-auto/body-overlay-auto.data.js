import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Body Overlay Auto",
  description: "Body overlay positioning for clipped surfaces."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("material", "Body Overlay Auto", {
  enableSearchFilter: true,
  text: "Body Overlay Auto",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom",
  maxHeight: 180,
  badgeShowLimit: 2,
  skin: "material"
});
