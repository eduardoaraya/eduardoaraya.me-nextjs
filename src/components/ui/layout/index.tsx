import { PropsWithChildren } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <div className="container m-auto pt-[120px]">{children}</div>
      <Footer />
    </>
  );
}
