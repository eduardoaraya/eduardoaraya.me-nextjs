import { Logo } from "../logo";
import { Menu } from "../menu";

export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/50">
      <div className="container m-auto">
        <div className="flex flex-row justify-between items-center px-5 py-3">
          <div className="w-[65px] md:w-[100px]">
            <Logo width={100} height={100} />
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
