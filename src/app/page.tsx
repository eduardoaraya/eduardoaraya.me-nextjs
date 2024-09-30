import {
  AWSIcon,
  AngularIcon,
  ArchIcon,
  AzureIcon,
  CsharpIcon,
  DockerIcon,
  GCPIcon,
  IonicIcon,
  JsIcon,
  MagentoIcon,
  MysqlIcon,
  NodejsIcon,
  PostgresqlIcon,
  ReactIcon,
  TsIcon,
  WordpressIcon,
} from "@eduardoaraya/components/icons";
import { Logo } from "@eduardoaraya/components/ui/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full flex flex-col lg:pt-[75px]">
        <h1 className="mb-20 text-center font-title font-bold text-4xl">
          Hi there!
          <span className="text-4xl">👋</span>
        </h1>
        <div className="flex flex-row">
          <div className="p-5">
            <Image
              className="shadow-xl rounded-md"
              src="/images/profile.jpeg"
              alt="Profile Picture"
              width={300}
              height={300}
            ></Image>
          </div>
          <div className="p-5">
            <h2 className="mb-10 font-title font-bold text-4xl">
              I'm Eduardo Araya
            </h2>
            <h3 className="mt-3 font-title text-2xl">👓 Fullstack Developer</h3>
            <h3 className="mt-3 font-title text-2xl">🐧 Linux user</h3>
            <h3 className="mt-3 font-title text-2xl">☕ Coffee Lover</h3>
            <h3 className="mt-3 font-title text-2xl">
              💍 Groom of a beautiful woman
            </h3>
            <h3 className="mt-3 font-title text-2xl">
              🌎 From Vitória/ES - Brazil
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full py-[75px]">
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">Mentoring</h1>
              <p className="p-1 font-body">
                I have helped developers to reach the next level of their
                careers
              </p>
            </div>
          </div>

          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">Consultancy</h1>
              <p className="p-1 font-body">
                Improving architecture and processes in software development
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">Leadership</h1>
              <p className="p-1 font-body">
                lead the team to achieve the best results
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h1 className="font-title font-bold text-2xl m-5">766,5L</h1>
              <p className="p-1 font-body">☕ of Coffee</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h1 className="font-title font-bold text-2xl m-5">7 years</h1>
              <p className="p-1 font-body">of Coding</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-2 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h1 className="font-title font-bold text-2xl m-5">Photography</h1>
              <p className="p-1 font-body">as a hobby</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[75px] lg:py-[105px]">
        <h1 className="font-title font-bold text-center text-2xl">
          Technologies that I work with
        </h1>
        <div className="p-10 flex flex-col mt-10">
          <div className="border-b-2 md:max-h-[250px] flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">Front-end</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <ReactIcon />
              <AngularIcon />
              <IonicIcon />
              <WordpressIcon />
            </div>
          </div>
          <div className="border-b-2 md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">Back-end</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <JsIcon />
              <TsIcon />
              <MagentoIcon />
              <NodejsIcon />
              <CsharpIcon />
            </div>
          </div>
          <div className="border-b-2 md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">Databases</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <PostgresqlIcon />
              <MysqlIcon />
            </div>
          </div>
          <div className="border-b-2 md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">Cloud</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <GCPIcon />
              <AWSIcon />
              <AzureIcon />
            </div>
          </div>
          <div className="md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">Others</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <ArchIcon />
              <DockerIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
