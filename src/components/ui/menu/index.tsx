import { PropsWithChildren } from "react";

export function Menu(
  props: PropsWithChildren<{ isInline: boolean }>
): JSX.Element {
  const directionClass = props.isInline ? `flex-row` : `flex-col`;
  return (
    <nav className="w-full">
      <ul className={`w-full flex ${directionClass} justify-around`}>
        <li className="bg-white rounded-sm hover:shadow-sm mb-2 px-5 py-3 text-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out">
          <a href="/#about-me">About me!</a>
        </li>
        <li className="bg-white rounded-sm hover:shadow-sm mb-2 px-5 py-3 text-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out">
          <a href="/blog">Blog</a>
        </li>
        <li className="bg-white rounded-sm hover:shadow-sm mb-2 px-5 py-3 text-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="bg-white rounded-sm hover:shadow-sm mb-2 px-5 py-3 text-lg cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
