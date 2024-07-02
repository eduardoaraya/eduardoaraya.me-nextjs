import { Logo } from "@eduardoaraya/components/ui/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full flex flex-row justify-start pt-[75px]">
        <div className="p-10">
          <h1 className="mt-10 font-title font-bold text-2xl">Hi there!</h1>
          <p className="w-[500px] mt-10 font-body">
            I'm Eduardo Araya, a technology enthusiast and problem solver with a
            career that began in 2017. Starting as a web developer, I honed my
            skills in PHP, MySQL, Javascript, HTML, and CSS, which laid the
            foundation for my growth.
          </p>
          <p className="w-[500px] mt-10 font-body">
            Over the years, I've dived into various projects, gaining expertise
            in technologies like Javascript, Typescript, Node.js, PHP, Docker,
            Linux, and Angular. As a full stack developer, I've tackled
            everything from mobile apps and e-commerce to enterprise systems,
            always striving to deliver impactful solutions.
          </p>
        </div>
        <div className="p-5 w-full">
          <div className="flex justify-center items-center">
            <div className="shadow-2xl overflow-hidden rounded-t-[5px] rounded-b-[5px] rounded-r-[5px] rounded-l-[5px] rounded-tl-[5px] ">
              <Image
                src="/images/profile.jpeg"
                width={800}
                height={500}
                alt="Profile picture"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {false && (
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
      )}

      <div className="w-full py-[75px]">
        <h1 className="font-title font-bold text-center text-2xl">My Skills</h1>
        <div className="p-10 flex flex-col mt-10">
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold">Profile</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                - Strong problem-solving abilities - Experience in diverse tech
                projects - Hermeneutic approach to technology - Mentor -
                Committed to achieving goals and delivering results
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold">Front-end</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                React, Vue, Angular, Next.js, Material UI, Bootstrap
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold">Back-end</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                Node.js, PHP, Laravel/Lumen, .NET/C#, Magento, Wordpress
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold">Databases</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">
                MySQL, Postgres, Sqlserver, MongoDB
              </p>
            </div>
          </div>
          <div className="border-b-2 h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold">Cloud</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">AWS, GCP, Azure, Magento Cloud</p>
            </div>
          </div>
          <div className="h-[250px] flex flex-row">
            <div className="flex items-center justify-center border-r-2 min-w-[250px] h-full">
              <h2 className="text-xl font-title font-bold">Others</h2>
            </div>
            <div className="h-full p-10 flex items-center">
              <p className="p-1 font-body">Docker, Linux</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
