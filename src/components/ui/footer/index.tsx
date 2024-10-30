export function Footer(): JSX.Element {
  return (
    <footer className="p-[20px] md:p-10 w-full">
      <div className="container m-auto px-5 lg:px-0">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xs text-gray-400">Created by eduardoaraya.me</h1>
          <p className="text-xs text-gray-400">
            All rights reserved - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
