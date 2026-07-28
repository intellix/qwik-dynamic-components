import { createContextId, useContextProvider, useSignal } from "@builder.io/qwik";

export const UserContextId = createContextId('user');

export const useUserProvider = ({ hasSession }: { hasSession: boolean }) => {
  const userId = useSignal<string | null | undefined>(undefined);
  const isAuthed = useSignal(hasSession);

  useContextProvider(UserContextId, {
    isAuthed,
    userId,
  });
}