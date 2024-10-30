export function Menu() {
  return (
    <nav>
      <ul className="flex flex-row justify-around">
        <li className="font-bold bg-white p-5 text-xs lg:text-md shadow">
          <a href="#about-me">About me!</a>
        </li>
        <li className="font-bold bg-white p-5 text-xs lg:text-md shadow">
          <a href="#skills">Skills</a>
        </li>
        {/* <li className="font-bold bg-white p-5 text-xs lg:text-md shadow">
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}
