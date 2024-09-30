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
        <div className="flex flex-row mt-10">
          <div className="p-5">
            <Image
              className="shadow-xl rounded-md"
              src="/images/profile.jpeg"
              alt="Profile Picture"
              width={300}
              height={300}
            ></Image>
          </div>
          <div className="p-5 flex-1">
            <h2 className="mb-10 font-title font-bold text-4xl">
              I'm Eduardo Araya
            </h2>
            <h3 className="mt-3 font-title text-2xl">👓 Fullstack Developer</h3>
            <h3 className="mt-3 font-title text-2xl">🐧 Linux user</h3>
            <h3 className="mt-3 font-title text-2xl">☕ Coffee Lover</h3>
            <h3 className="mt-3 font-title text-2xl">
              💍 Fiancé of a beautiful woman
            </h3>
            <h3 className="mt-3 font-title text-2xl">
              🌎 From Vitória/ES - Brazil
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full mt-36 py-[75px]">
        <h1 className="mb-20 text-right font-title font-bold text-4xl">
          My soft skills
        </h1>
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Mentoring</h2>
              <p className="p-1 font-body">
                I have helped developers to reach the next level of their
                careers
              </p>
            </div>
          </div>

          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Consultancy</h2>
              <p className="p-1 font-body">
                Improving architecture and processes in software development
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Leadership</h2>
              <p className="p-1 font-body">
                lead the team to achieve the best results
              </p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h2 className="font-title font-bold text-2xl m-5">766,5L</h2>
              <p className="p-1 font-body">☕ of Coffee</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h2 className="font-title font-bold text-2xl m-5">
                {new Date().getFullYear() - 2017} years
              </h2>
              <p className="p-1 font-body">of Coding</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-2 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Photography</h2>
              <p className="p-1 font-body">as a hobby</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 py-[75px]">
        <h1 className="mb-20 text-right font-title font-bold text-4xl">
          Technologies that I work with
        </h1>
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Frontend</h2>
              <div className="h-full p-10 flex items-center">
                <JsIcon />
                <TsIcon />
                <ReactIcon />
                <AngularIcon />
                <IonicIcon />
                <WordpressIcon />
              </div>
            </div>
          </div>

          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Back-end</h2>
              <div className="h-full p-10 flex items-center">
                <MagentoIcon />
                <NodejsIcon />
                <CsharpIcon />
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">
                Cloud Providers
              </h2>
              <div className="h-full p-10 flex items-center">
                <GCPIcon />
                <AWSIcon />
                <AzureIcon />
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Database</h2>
              <div className="h-full p-10 flex items-center">
                <PostgresqlIcon />
                <MysqlIcon />
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-4 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Tools</h2>
              <div className="h-full p-10 flex items-center">
                <ArchIcon />
                <DockerIcon />
              </div>
            </div>
          </div>

          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h2 className="font-title font-bold text-2xl m-5">766,5L</h2>
              <p className="p-1 font-body">☕ of Coffee</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-1 h-[200px]">
            <div className="h-full p-10 flex flex-col items-center">
              <h2 className="font-title font-bold text-2xl m-5">
                {new Date().getFullYear() - 2017} years
              </h2>
              <p className="p-1 font-body">of Coding</p>
            </div>
          </div>
          <div className="shadow-xl rounded-md col-span-2 h-[200px]">
            <div className="h-full p-10 flex items-center">
              <h2 className="font-title font-bold text-2xl m-5">Photography</h2>
              <p className="p-1 font-body">as a hobby</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[75px] lg:py-[105px]">
        <h1 className="font-title font-bold text-left text-4xl">Experiences</h1>
        <div className="p-10 flex flex-col mt-10">
          <div className="border-b-2 md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">2024</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <h2 className="text-xl font-title font-bold">DB</h2>
            </div>
          </div>
          <div className="border-b-2 md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">2020-2022</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <h2 className="text-xl font-title font-bold">WebJump</h2>
            </div>
          </div>
          <div className="border-b-2 md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">2018</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <h2 className="text-xl font-title font-bold">Puzzle.lab</h2>
            </div>
          </div>
          <div className="md:max-h-[250px] h-full flex md:flex-row flex-col">
            <div className="flex p-5 lg:p-0 items-center lg:justify-center lg:border-r-2 md:min-w-[250px] sm:min-w-[170px]">
              <h2 className="text-xl font-title font-bold">2017</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <h2 className="text-xl font-title font-bold">WebdbSolutions</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 py-[75px]">
        <h1 className="mb-5 text-left font-title font-bold text-4xl">
          About me!
        </h1>
        <p className="font-body">
          Wheter have you scrolled this far, you might want to know more about
        </p>
        <div className="grid grid-cols-4 gap-4 auto-rows-auto">
          <div className="rounded-md col-span-4 h-auto">
            <div className="h-full p-10">
              <h2 className="font-title font-bold text-2xl">- Life</h2>
              <div className="h-full p-5">
                <p className="font-body">
                  I was born in Rio de Janeiro/RJ - Brazil in 1997.
                </p>
                <p className="font-body">
                  I lived part of my life in Rio but I moved to the South of
                  Brazil to live in Porto Alegre/RS where I spent 12 years of my
                  life. In 2018 I decide to move to Vitória/ES.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md col-span-4 h-auto">
            <div className="h-full p-10">
              <h2 className="font-title font-bold text-2xl">- Professional</h2>
              <div className="h-full p-5">
                <p className="font-body">
                  Since I was a kid I like to be around technologies, I was so
                  curios that I learn by my self how to make 3d models and also
                  edit videos with After Effect, I did it just going trought of
                  the features and figuring out whats happens. I was so curios
                  of how things work ...
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md col-span-4 h-auto">
            <div className="h-full p-10">
              <h2 className="font-title font-bold text-2xl">- Hobby</h2>
              <div className="h-full p-5">
                <p className="font-body">
                  Since I was a kid I like to be around technologies, I was so
                  curios that I learn by my self how to make 3d models and also
                  edit videos with After Effect, I did it just going trought of
                  the features and figuring out whats happens. I was so curios
                  of how things work ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
