export function Footer(): JSX.Element {
  return (
    <footer className="py-10 w-full ">
      <div className="container m-auto">
        <div className="flex flex-row justify-between items-center">
          <h1>Created by eduardoaraya.me</h1>
          {/* <nav className="w-[300px]">
            <ul className="flex flex-row justify-around">
              <li>About me!</li>
              <li>My skills</li>
              <li>Contact</li>
            </ul>
          </nav> */}
          <p>All rights reserved - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
