import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { WalletType } from "../graphql/wallet.enum";

interface UnusedProps {
  text: string;
}

export const Unused = component$<UnusedProps>((props) => {
  useTask$(() => console.log('Unused useTask$', WalletType.MAIN));
  useVisibleTask$(() => console.log('Unused useVisibleTask$', WalletType.MAIN));
  
  return (
    <>Unused {props.text}</>
  )
});