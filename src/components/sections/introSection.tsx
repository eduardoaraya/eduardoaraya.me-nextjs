import Image from "next/image";
import { Logo } from "@eduardoaraya/components/ui/logo";

export const IntroductionSection = () => (
  <div className="w-full max-w-[350px] flex flex-col lg:pt-[75px]">
    <div className="flex flex-col">
      <div className="mb-3">
        <Image
          className="shadow-md rounded-md"
          src="/images/profile.jpeg"
          alt="Profile Picture"
          width={75}
          height={75}
        ></Image>
        {/* <Logo width={200} height={200} /> */}
        <h1 className="mb-3 font-title text-xl">
          <span className="text-4xl">👋</span> Hi there!
        </h1>
      </div>
      <div className="flex-1">
        {/* <h1 className="mb-3 font-title font-bold text-xl">
          <span className="text-4xl">👋</span> Hi there!
        </h1> */}
        {/* <h1 className="mb-3 font-title font-bold text-lg">I'm Eduardo Araya</h1> */}
        <h3 className="mt-3 text-sm">🌎 Vitória/ES - Brazil</h3>
        <h3 className="mt-5 text-sm">👓 Fullstack Developer</h3>
        {/* <h3 className="mt-3 text-md">🐧 Linux user</h3>
        <h3 className="mt-3 text-md">☕ Coffee Lover</h3>
        <h3 className="mt-3 text-md">
          💍 Fiancé of a beautiful woman
        </h3> */}
      </div>
    </div>
  </div>
);
