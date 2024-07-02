import { Logo } from "../logo";

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 p-2 w-full bg-white/50">
      <div className="container m-auto">
        <div className="flex flex-row justify-between items-center">
          <Logo />
          <nav className="w-[300px]">
            <ul className="flex flex-row justify-around">
              <li>About me!</li>
              <li>My skills</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
