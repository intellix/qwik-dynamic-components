import type { Component } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

export const ComponentContextId = createContextId<Record<string, Component>>('components');
export const ConditionalStateContextId = createContextId<Record<string, string>>('conditional-state');