import { component$, Slot } from "@builder.io/qwik";
import { useCmsContextProvider } from "~/components/cms-core/cms-context-provider";
import { HeaderFooterLayout } from "~/components/core/header-footer-layout";

// Shared loaders (need to be exported)
export { useSettingsLoader } from "~/components/core/settings-loader";

export default component$(() => {
  useCmsContextProvider();
  
  return (
    <HeaderFooterLayout>
      <Slot />
    </HeaderFooterLayout>
  );
});
