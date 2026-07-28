import { component$, Signal, useContext, useStore, useTask$ } from "@builder.io/qwik";
import { CmsComponent, CmsStory } from "./cms.types";
import { ConditionalStateContextId } from "./context";
import { conditionalFilterer } from "./conditional-filterer";
import { DynamicComponents } from "./dynamic-components";

interface StoryProps {
  story: Signal<CmsStory | undefined>;
}

export const Story = component$<StoryProps>(props => {
  const conditionalState = useContext(ConditionalStateContextId);
  const filtered = useStore<{ value: CmsComponent[] }>({ value: [] });

  useTask$(({ track }) => {
    track(conditionalState);
    track(props.story);

    filtered.value = conditionalFilterer(conditionalState, props.story.value?.body) ?? [];
  });

  if (!filtered.value) {
    return null;
  }
  
  return <DynamicComponents components={filtered.value} />
});