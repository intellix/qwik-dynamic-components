import { component$, useContext } from "@builder.io/qwik";
import { ComponentContextId } from "./context";
import { CmsComponent } from "./component.type";

export const DynamicBlocks = component$((props: { body?: CmsComponent[] }) => {
  const components = useContext(ComponentContextId);
  
  return props.body?.map(c => {
    const Cmp = components[c.component];
    if (!Cmp) {
      return;
    }

    return <Cmp key={c.id} />
  });
});