import { PropsWithChildren } from "react";

export function PageLayout({
  aside,
  children,
}: PropsWithChildren<{ aside: JSX.Element }>): JSX.Element {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-3">
          <div className="relative w-full">
            <div className="md:fixed min-w-[20px]">
              <div className="w-full">{aside}</div>
            </div>
          </div>
        </div>
        <div className="flex col-span-12 md:col-start-4 ">
          <div className="flex flex-col pb-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
