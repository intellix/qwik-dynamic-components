import { $, component$, Slot, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// Interactive shell (onClick$) — but it NO LONGER calls the provider hook.
// The provider is now registered in root.tsx (non-interactive). Test: does /about go lazy?
export const HeaderFooterLayout = component$(() => {
  const open = useSignal(false);
  return (
    <>
      <header>
        <nav>
          <Link href="/home" prefetch="js">Home</Link>&nbsp;
          <Link href="/about" prefetch="js">About</Link>&nbsp;
          <Link href="/contact" prefetch="js">Contact</Link>&nbsp;
          <button onClick$={$(() => { open.value = !open.value; console.log("menu", open.value); })}>
            menu {open.value ? "▲" : "▼"}
          </button>
        </nav>
      </header>

      <hr />
      <Slot />
      <hr />

      <footer>Random footer</footer>
    </>
  )
});
