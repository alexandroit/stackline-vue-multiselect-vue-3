import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Using inside dialog",
  description: "appendToBody avoids clipping inside overflow containers."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("material", "Using inside dialog", {
  enableSearchFilter: true,
  text: "Using inside dialog",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom",
  maxHeight: 180,
  badgeShowLimit: 2,
  skin: "material"
});
