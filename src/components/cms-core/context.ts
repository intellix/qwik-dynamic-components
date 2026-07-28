// import type { Component, QRL } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

export type ComponentLoader = any;//QRL<() => Promise<Component>>;

export const ComponentContextId = createContextId<Record<string, ComponentLoader>>('components');
