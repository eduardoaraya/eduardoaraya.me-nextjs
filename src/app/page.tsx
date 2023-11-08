import { Logo } from "@eduardoaraya/components/ui/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full flex flex-row justify-start pt-[75px]">
        <div className="p-10">
          <h1 className="mt-10 font-title font-bold text-2xl">Hi there!</h1>
          <p className="w-[500px] mt-10 font-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {"industry's"} standard dummy
          </p>
          <p className="w-[500px] mt-10 font-body">
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="p-5 w-full">
          <div className="flex justify-center items-center">
            <div className="shadow-2xl rounded-t-[50%] rounded-b-[50%] rounded-r-[50%] rounded-l-[10%] rounded-tl-[30%] overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                width={300}
                height={300}
                alt="Profile picture"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[75px]">
        <div className="p-10 grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="shadow-xl rounded-md col-span-3 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">100</h1>
              <p className="p-1 font-body">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h1 className="font-title font-bold text-2xl m-5">100,5L</h1>
              <p className="p-1 font-body">Coffe</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h1 className="font-title font-bold text-2xl m-5">11238h</h1>
              <p className="p-1 font-body">Coding</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-3 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">16870</h1>
              <p className="p-1 font-body">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-2 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">58</h1>
              <p className="p-1 font-body">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-2 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">20</h1>
              <p className="p-1 font-body">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[75px]">
        <h1 className="font-title font-bold text-center text-2xl">My Skills</h1>
        <div className="p-10 flex flex-col mt-10">
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold uppercase">
                Comunication
              </h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                Text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold uppercase">
                Front-end
              </h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                Text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold uppercase">
                Back-end
              </h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                Text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold uppercase">Cloud</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                Text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold uppercase">Others</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                Text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
