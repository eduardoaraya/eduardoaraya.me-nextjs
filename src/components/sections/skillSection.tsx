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

const YEAR_STARTED = 2017;

export const SkillSection = () => (
  <div className="w-full mt-10">
    <h1 className="mb-10 font-title text-2xl">My Skills</h1>
    <div className="grid grid-cols-6 gap-20 auto-rows-auto">
      <div className="rounded-md col-span-2">
        <h2 className="font-title  text-md text-gray-500 mb-3 border-b-2 p-3 uppercase">
          Back-end
        </h2>
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={6}>
              <NodejsIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={3}>
              <CsharpIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <MagentoIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-2">
        <h2 className="font-title  text-md text-gray-500 mb-3 border-b-2 p-3 uppercase">
          Cloud Providers
        </h2>
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={3}>
              <AWSIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={3}>
              <AzureIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={1}>
              <GCPIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-2">
        <h2 className="font-title  text-md text-gray-500 mb-3 border-b-2 p-3 uppercase">
          Database
        </h2>
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={7}>
              <MysqlIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <PostgresqlIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>

      <div className="rounded-md col-span-2">
        <h4 className="font-title  text-md text-gray-500 mb-3 border-b-2 p-3 uppercase">
          Frontend
        </h4>
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={7}>
              <JsIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={5}>
              <TsIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={5}>
              <AngularIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={5}>
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
        <h2 className="font-title  text-md text-gray-500 mb-3 border-b-2 p-3 uppercase">
          Tools
        </h2>
        <div className="h-full flex items-center">
          <div className="h-full flex items-center flex-col gap-5">
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={7}>
              <DockerIcon width={50} height={50} />
            </XpChart>
            <XpChart yearStarted={YEAR_STARTED} yearsOfExperience={2}>
              <ArchIcon width={50} height={50} />
            </XpChart>
          </div>
        </div>
      </div>
      {/* <div className="rounded-md col-span-3">
        <div className="h-full p-10 flex flex-col items-center">
          <h2 className="font-title font-bold text-2xl m-5">766,5L</h2>
          <p className="p-1 font-body">☕ of Coffee</p>
        </div>
      </div>
      <div className="rounded-md col-span-3">
        <div className="h-full p-10 flex flex-col items-center">
          <h2 className="font-title font-bold text-2xl m-5">
            {new Date().getFullYear() - 2017} years
          </h2>
          <p className="p-1 font-body">of Coding</p>
        </div>
      </div>
      <div className="rounded-md col-span-3">
        <div className="h-full p-10 flex items-center">
          <h2 className="font-title font-bold text-2xl m-5">Photography</h2>
          <p className="p-1 font-body">as a hobby</p>
        </div>
      </div> */}
    </div>
  </div>
);