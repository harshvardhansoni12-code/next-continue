import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <header>Auth Header</header>
        <main>{children}</main>
        <footer>Auth Footer</footer>
      </div>
    </>
  );
}
