import { Logo } from "../logo";

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/50">
      <div className="container m-auto">
        <div className="flex flex-row justify-between items-center px-5 py-3">
          <Logo width={100} height={100} />
          <nav>
            <ul className="flex flex-row justify-around">
              <li className="font-bold bg-white p-5 shadow">About me!</li>
              <li className="font-bold bg-white p-5 shadow">My skills</li>
              <li className="font-bold bg-white p-5 shadow">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
