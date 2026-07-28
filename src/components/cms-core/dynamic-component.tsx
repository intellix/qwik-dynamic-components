import { component$, useContext } from "@builder.io/qwik";
import { ComponentContextId } from "./context";
import { CmsComponent } from "./cms.types";

export const DynamicComponent = component$((props: { component: CmsComponent }) => {
  const components = useContext(ComponentContextId);
  
  const Cmp = components[props.component.component];
  if (!Cmp) {
    return;
  }

  return <Cmp key={props.component.id} {...props.component.data} />
});