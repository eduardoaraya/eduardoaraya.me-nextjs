import { TitleSescion } from "../ui/title/titleSection";

export const AboutMeSection = () => (
  <section className="w-full md:mt-10 p-[35px] md:p-[5px]" id="about-me">
    <TitleSescion>About me!</TitleSescion>
    <div className="grid grid-cols-4 gap-4 auto-rows-auto text-gray-500">
      <div className="rounded-md col-span-4 h-auto">
        <div className="h-full">
          <div className="h-full text-xs md:text-md lg:text-lg mt-5">
            <p>Hi there!</p>
            <p>
              My name is <span className="font-bold">Eduardo Araya</span>!
            </p>
            <p>People also call me Edu, Araya, Kadu, Carioca...</p>
            <p className="my-5">
              I was born in Rio de Janeiro/RJ Brazil in 1997 and when I was 8
              years old I moved to Porto Alegre/RS.
            </p>
            <p>
              But now, I'm currently living in Vitória/ES (probabilly you don't
              know here) with my wife and dogs (Tobias and Sury).
            </p>
            <p>It's a amazing city on Brazilian's southeast coast.</p>
            <p className="my-5">
              My hobbies are: cycling, tecnology, games, haiking, travelling and
              also taking photos.
            </p>
            <p>
              I've been working as a developer since 2017 when I finished my
              technical IT course.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
