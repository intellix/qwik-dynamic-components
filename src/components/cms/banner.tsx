import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

export const Banner = component$(() => {
  useTask$(() => console.log('Banner useTask$'));
  useVisibleTask$(() => console.log('Banner useVisibleTask$'));
  
  return (
    <div>Banner</div>
  )
});