import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
}

export const Button = component$<ButtonProps>((props) => {
  useTask$(() => console.log('Button useTask$'));
  useVisibleTask$(() => console.log('Button useVisibleTask$'));
  
  return (
    <>Button: <button>{props.text}</button></>
  )
});