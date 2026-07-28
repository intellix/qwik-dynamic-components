import { component$, Slot } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { AppContextProvider } from "~/components/core/app-context-provider";

// Shared loaders (need to be exported)
export { useSettingsLoader } from "~/components/core/settings-loader";

export const useHasSession = routeLoader$(() => false);

export default component$(() => {
  const hasSession = useHasSession();

  return (
    <AppContextProvider hasSession={hasSession.value}>
      <nav>
        <Link href="/home">Home</Link>&nbsp;
        <Link href="/about">About</Link>&nbsp;
        <Link href="/contact">Contact</Link>&nbsp;
      </nav>
      <hr />
      <Slot />
    </AppContextProvider>
  );
});