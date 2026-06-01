import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  title: "State hook",
  description: "Use the low-level state composable without the styled DOM."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "State hook", {
  enableSearchFilter: true,
  text: "State hook"
});
