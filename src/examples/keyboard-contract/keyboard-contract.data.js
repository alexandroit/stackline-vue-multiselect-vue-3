import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "Keyboard contract",
  description: "Space, Tab, arrows, Escape, Backspace, and focused badge removal."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Keyboard contract", {
  enableSearchFilter: true,
  text: "Keyboard contract"
});
