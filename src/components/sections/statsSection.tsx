export const StatsSection = () => (
  <div className="w-full mt-36 py-[75px]">
    <h1 className="mb-20 text-right font-title text-2xl">Portfolio</h1>
    <div className="grid grid-cols-4 gap-4 auto-rows-auto">
      <div className="shadow-md rounded-md col-span-4 h-[200px]">
        <div className="h-full p-10 flex items-center">
          <h2 className="font-title uppercase text2xl m-5">Mentoring</h2>
          <p className="p-1 font-body text-gray-400">
            I have helped developers to reach the next level of their careers
          </p>
        </div>
      </div>

      <div className="shadow-md rounded-md col-span-4 h-[200px]">
        <div className="h-full p-10 flex items-center">
          <h2 className="font-title uppercase text-xl m-5">Consultancy</h2>
          <p className="p-1 font-body text-gray-400">
            Improving architecture and processes in software development
          </p>
        </div>
      </div>
      <div className="shadow-md rounded-md col-span-4 h-[200px]">
        <div className="h-full p-10 flex items-center">
          <h2 className="font-title uppercase text-xl m-5">Leadership</h2>
          <p className="p-1 font-body text-gray-400">
            lead the team to achieve the best results
          </p>
        </div>
      </div>
      <div className="shadow-md rounded-md col-span-1 h-[200px]">
        <div className="h-full p-10 flex flex-col items-center">
          <h2 className="font-title uppercase text-xl m-5">766,5L</h2>
          <p className="p-1 font-body text-gray-400">☕ of Coffee</p>
        </div>
      </div>
      <div className="shadow-md rounded-md col-span-1 h-[200px]">
        <div className="h-full p-10 flex flex-col items-center">
          <h2 className="font-title uppercase text-xl m-5">
            {new Date().getFullYear() - 2017} years
          </h2>
          <p className="p-1 font-body text-gray-400">of Coding</p>
        </div>
      </div>
      <div className="shadow-md rounded-md col-span-2 h-[200px]">
        <div className="h-full p-10 flex items-center">
          <h2 className="font-title uppercase text-xl m-5">Photography</h2>
          <p className="p-1 font-body text-gray-400">as a hobby</p>
        </div>
      </div>
    </div>
  </div>
);
