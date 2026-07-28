import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import { ComponentContextId } from "./context";
import { Button } from "../cms/button";
import { Banner } from "../cms/banner";
import { Accordion } from "../cms/accordion";

export const CmsContextProvider = component$(() => {
  useContextProvider(ComponentContextId, {
    button: Button,
    banner: Banner,
    accordion: Accordion,
  });

  return (
    <Slot />
  );
});