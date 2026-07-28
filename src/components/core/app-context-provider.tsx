import { component$, Slot } from "@builder.io/qwik";
import { useCmsContextProvider } from "../cms-core/cms-context-provider";
import { useUserProvider } from "./user-provider";

export interface AppContextProviderProps {
  hasSession: boolean;
}

/** A wrapper context provider that provides everything */
export const AppContextProvider = component$<AppContextProviderProps>(({ hasSession }) => {
  useCmsContextProvider();
  useUserProvider({ hasSession });

  return (
    <div>
      <Slot />
    </div>
  )
});