import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { WalletType } from "../graphql/wallet.enum";

interface AccordionProps {
  title: string;
  text: string;
}

export const Accordion = component$<AccordionProps>((props) => {
  useTask$(() => console.log('Accordion useTask$', WalletType.MAIN));
  useVisibleTask$(() => console.log('Accordion useVisibleTask$', WalletType.MAIN));

  return (
    <div>Accordion: {props.title} / {props.text}</div>
  )
});