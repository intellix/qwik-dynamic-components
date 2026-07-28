import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";

interface BannerProps {
  image: string;
}

export const Banner = component$<BannerProps>((props) => {
  useTask$(() => console.log('Banner useTask$'));
  useVisibleTask$(() => console.log('Banner useVisibleTask$'));
  
  return (
    <div>Banner: {props.image}</div>
  )
});