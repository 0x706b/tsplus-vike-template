import type { Type } from "@/lib/ts-plus-example.js";

import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      <p>This page is:</p>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <li>Using ts+. {({ a: 1 } as Type).add(1).a}</li>
      </ul>
    </>
  );
}
