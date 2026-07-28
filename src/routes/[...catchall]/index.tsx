import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { CmsContextProvider } from "~/components/cms-core/cms-context-provider";
import { DynamicBlocks } from "~/components/cms-core/dynamic-blocks";

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

  return (
    <CmsContextProvider>
      <h1>Hi 👋</h1>
      <nav>
        <Link href="/home">Home</Link>&nbsp;
        <Link href="/about">About</Link>&nbsp;
        <Link href="/contact" prefetch="js">Contact</Link>&nbsp;
      </nav>
      <hr />
      <div>
        <DynamicBlocks body={page.value?.body} />
      </div>
    </CmsContextProvider>
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
