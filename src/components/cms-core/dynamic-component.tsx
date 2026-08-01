import { type Component, component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { ComponentContextId } from "./context";
import { CmsComponent } from "./cms.types";

// Resolves the registered loader (DynamicBlock pattern) — renders after resolve.
export const DynamicComponent = component$((props: { component: CmsComponent }) => {
  const components = useContext(ComponentContextId);
  const loader = components[props.component.component];

  const Cmp = useSignal<Component<any>>();
  useTask$(async () => {
    if (loader) {
      Cmp.value = await loader();
    }
  });

  const Resolved = Cmp.value;
  if (!Resolved) {
    return null;
  }

  return <Resolved key={props.component.id} {...props.component.data} />;
});
