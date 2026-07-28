import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

export const Button = component$(() => {
  useTask$(() => console.log('Button useTask$'));
  useVisibleTask$(() => console.log('Button useVisibleTask$'));
  
  return (
    <div>Button</div>
  )
});