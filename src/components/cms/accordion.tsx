import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

export const Accordion = component$(() => {
  useTask$(() => console.log('Accordion useTask$'));
  useVisibleTask$(() => console.log('Accordion useVisibleTask$'));

  return (
    <div>Accordion</div>
  )
});