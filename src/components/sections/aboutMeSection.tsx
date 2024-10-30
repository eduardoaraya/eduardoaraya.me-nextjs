export const AboutMeSection = () => (
  <section className="w-full md:mt-10 p-[35px] md:pt-[75px]" id="about-me">
    <h1 className="text-left font-title text-xl md:text-xl lg:text-2xl md:mb-10">
      About me!
    </h1>
    <div className="grid grid-cols-4 gap-4 auto-rows-auto text-gray-500">
      <div className="rounded-md col-span-4 h-auto">
        <div className="h-full">
          <div className="h-full text-xs md:text-sm lg:text-md mt-5">
            <p className="font-body">
              My name is Eduardo Araya and was born in Rio de Janeiro/RJ -
              Brazil and I am {new Date().getFullYear() - 1997} years old.
            </p>
            <p className="font-body mt-2">
              I live with my fiancée (a beautiful woman) and our dog Tobias.
            </p>
            <p className="my-5 font-body">
              I like playing video games, hiking, traveling and also I take some
              sportive pictures on my free time. Since I was a kid I like to be
              around technologies, I was so curios that I learn by my self how
              to make 3d models and also edit videos with After Effect and I was
              so curios of how things work ...
            </p>
            <p className="my-5 font-body">
              Started my career in 2017 as a Web Developer and I've working and
              exploring this area since then.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="rounded-md col-span-4 h-auto">
        <div className="h-full p-10">
          <h2 className="font-title text-xl uppercase">- Professional</h2>
          <div className="h-full p-5">
            <p className="font-body">
              Since I was a kid I like to be around technologies, I was so
              curios that I learn by my self how to make 3d models and also edit
              videos with After Effect, I did it just going trought of the
              features and figuring out whats happens. I was so curios of how
              things work ...
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md col-span-4 h-auto">
        <div className="h-full p-10">
          <h2 className="font-title text-xl uppercase">- Hobby</h2>
          <div className="h-full p-5">
            <p className="font-body">
              Since I was a kid I like to be around technologies, I was so
              curios that I learn by my self how to make 3d models and also edit
              videos with After Effect, I did it just going trought of the
              features and figuring out whats happens. I was so curios of how
              things work ...
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </section>
);
