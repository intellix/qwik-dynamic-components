import { component$, useContextProvider } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { ComponentContextId } from "~/components/cms-core/context";
import { DynamicBlocks } from "~/components/cms-core/dynamic-blocks";
import { Accordion } from "~/components/cms/accordion";
import { Banner } from "~/components/cms/banner";
import { Button } from "~/components/cms/button";

export const usePage = routeLoader$((event) => {
  const pathname = event.url.pathname;

  return {
    '/home/': {
      body: [
        { id: Math.random(), component: 'banner' },
        { id: Math.random(), component: 'accordion' },
        { id: Math.random(), component: 'button' },
      ]
    },
    '/about/': {
      body: [
        { id: Math.random(), component: 'banner' },
      ]
    },
    '/contact/': {
      body: [
        { id: Math.random(), component: 'banner' },
        { id: Math.random(), component: 'accordion' },
      ],
    },
  }[pathname];
});

export default component$(() => {
  const page = usePage();

  useContextProvider(ComponentContextId, {
    button: Button,
    banner: Banner,
    accordion: Accordion,
  });

  return (
    <>
      <h1>Hi 👋</h1>
      <nav>
        <Link href="/home">Home</Link>&nbsp;
        <Link href="/about">About</Link>&nbsp;
        <Link href="/contact">Contact</Link>&nbsp;
      </nav>
      <hr />
      <div>
        <DynamicBlocks body={page.value?.body} />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
