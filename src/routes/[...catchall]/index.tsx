import { component$, useStore } from "@builder.io/qwik";
import { DocumentHeadProps, DocumentHeadValue, routeLoader$ } from "@builder.io/qwik-city";
import { CmsStory } from "~/components/cms-core/cms.types";
import { Story } from "~/components/cms-core/story";

export const useStory = routeLoader$<CmsStory | undefined>((event) => {
  const pathname = event.url.pathname;

  return {
    '/home/': {
      title: 'Home',
      body: [
        { id: Math.random(), component: 'banner', data: { image: 'home.jpg' } },
        { id: Math.random(), component: 'accordion', data: { title: 'Home FAQ', text: 'Meh...' } },
        { id: Math.random(), component: 'button', data: { text: 'Click me' } },
      ]
    },
    '/about/': {
      title: 'About',
      body: [
        { id: Math.random(), component: 'banner', data: { image: 'about.jpg' } },
      ]
    },
    '/contact/': {
      title: 'Contact',
      body: [
        { id: Math.random(), component: 'banner', data: { image: 'contact.jpg' } },
        { id: Math.random(), component: 'accordion', data: { title: 'Contact FAQ', text: 'Meh...' } },
      ],
    },
  }[pathname];
});

export default component$(() => {
  const story = useStory();
  const state = useStore({ isUserLoggedIn: 'false' });

  return (
    <div>
      <button onClick$={() => state.isUserLoggedIn = state.isUserLoggedIn === 'true' ? 'false' : 'true'}>Logged In? {state.isUserLoggedIn}</button>
      <hr />
      <div>
        <Story story={story} />
      </div>
    </div>
  );
});

export function head(props: DocumentHeadProps): DocumentHeadValue {
  const story = props.resolveValue(useStory);
  return {
    title: story?.title ?? 'No Title',
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],
  };
};
