import type { Component, QRL } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

export type ComponentLoader = QRL<() => Promise<Component>>;
export const ComponentContextId = createContextId<Record<string, ComponentLoader>>('components');
export const ConditionalStateContextId = createContextId<Record<string, string>>('conditional-state');
