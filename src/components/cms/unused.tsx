import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

interface UnusedProps {
  text: string;
}

export const Unused = component$<UnusedProps>((props) => {
  useTask$(() => console.log('Unused useTask$'));
  useVisibleTask$(() => console.log('Unused useVisibleTask$'));
  
  return (
    <>Unused {props.text}</>
  )
});