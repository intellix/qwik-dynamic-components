import { useContextProvider, useStore } from "@builder.io/qwik";
import { ComponentContextId, ConditionalStateContextId } from "./context";
import { Button } from "../cms/button";
import { Banner } from "../cms/banner";
import { Accordion } from "../cms/accordion";
import { Unused } from "../cms/unused";

export const useCmsContextProvider = () => {
  const state = useStore({ isUserLoggedIn: 'false' });
  useContextProvider(ConditionalStateContextId, state);

  useContextProvider(ComponentContextId, {
    button: Button,
    banner: Banner,
    accordion: Accordion,
    unused: Unused,
  });
}