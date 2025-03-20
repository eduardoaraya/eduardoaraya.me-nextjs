"use client";

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
import { XpChart } from "../charts/xp";
import { TitleSescion } from "../ui/title/titleSection";

const YEAR_STARTED = 2017;

export const SkillSection = () => (
  <section className="w-full mt-20 p-[35px] md:p-[5px]" id="skills">
    <TitleSescion>
      Technical skills
      <span className="ml-5 text-gray-400 text-sm md:text-md">
        Based on {new Date().getFullYear() - 2017} years of experience
      </span>
    </TitleSescion>

    <div className="grid grid-cols-1 lg:grid-cols-6 gap-20 auto-rows-auto pt-10">
      <div className="rounded-md col-span-2">
        {/* <h2 className="font-title text-md md:text-lg text-gray-500 my-3">
          Back-end
        </h2> */}
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={100}>
              <NodejsIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={4}>
              <CsharpIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <MagentoIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-2">
        {/* <h2 className="font-title text-md md:text-lg text-gray-500 my-3">
          Cloud Providers
        </h2> */}
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={4}>
              <AWSIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={5}>
              <AzureIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <GCPIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-2">
        {/* <h2 className="font-title text-md md:text-lg text-gray-500 my-3">
          Database
        </h2> */}
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={100}>
              <MysqlIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={5}>
              <PostgresqlIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-2">
        {/* <h4 className="font-title text-md md:text-lg text-gray-500 my-3">
          Frontend
        </h4> */}
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={100}>
              <JsIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={100}>
              <TsIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={7}>
              <AngularIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <IonicIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={4}>
              <ReactIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <WordpressIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-2">
        {/* <h2 className="font-title text-md md:text-lg text-gray-500 my-3">
          Tools
        </h2> */}
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={100}>
              <DockerIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={100}>
              <ArchIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
    </div>
  </section>
);
