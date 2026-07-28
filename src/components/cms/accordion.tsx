import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

interface AccordionProps {
  title: string;
  text: string;
}

export const Accordion = component$<AccordionProps>((props) => {
  useTask$(() => console.log('Accordion useTask$'));
  useVisibleTask$(() => console.log('Accordion useVisibleTask$'));

  return (
    <div>Accordion: {props.title} / {props.text}</div>
  )
});