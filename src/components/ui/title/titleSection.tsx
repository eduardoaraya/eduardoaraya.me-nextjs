import { PropsWithChildren } from "react";

export interface ITitleProps {}

export const TitleSescion: React.FC<PropsWithChildren<ITitleProps>> = ({
  children,
}): JSX.Element => (
  <h1 className="font-title text-left text-xl2 md:text-xl2 lg:text-4xl md:mb-5">
    {children}
  </h1>
);
