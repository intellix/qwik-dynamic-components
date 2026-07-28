import { routeLoader$ } from "@builder.io/qwik-city";

export const useSettingsLoader = routeLoader$(async () => {
  return {
    'live_stream:enabled': 'false'
  };
});