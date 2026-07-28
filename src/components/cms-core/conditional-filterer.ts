import { CmsComponent } from "./cms.types";

// Dummy state filterer
export function conditionalFilterer(state: Record<string, string>, body: CmsComponent[] | undefined) {
  return body?.filter(v => !!v);
}