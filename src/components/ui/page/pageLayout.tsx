import { PropsWithChildren } from "react";

export function PageLayout({
  aside,
  children,
}: PropsWithChildren<{ aside: JSX.Element }>): JSX.Element {
  return (
    <main className="flex flex-col">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-3">
          <div className="md:fixed p-10 md:pt-10">{aside}</div>
        </div>
        <div className="flex col-span-12 md:col-start-4">
          <div className="flex flex-col pb-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
