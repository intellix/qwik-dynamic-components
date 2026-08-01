import { $, useContextProvider, useStore } from "@builder.io/qwik";
import { ComponentContextId, ConditionalStateContextId } from "./context";

export const useCmsContextProvider = () => {
  const state = useStore({ isUserLoggedIn: "false" });
  useContextProvider(ConditionalStateContextId, state);
  useContextProvider(ComponentContextId, {
    button: $(() => import("../cms").then((m) => m.Button)),
    banner: $(() => import("../cms").then((m) => m.Banner)),
    accordion: $(() => import("../cms").then((m) => m.Accordion)),
    unused: $(() => import("../cms").then((m) => m.Unused)),
  });
};
