import { AboutMeSection } from "@eduardoaraya/components/sections/aboutMeSection";
import { IntroductionSection } from "@eduardoaraya/components/sections/introSection";
import { SkillSection } from "@eduardoaraya/components/sections/skillSection";
import { StatsSection } from "@eduardoaraya/components/sections/statsSection";
import { XpSection } from "@eduardoaraya/components/sections/xpSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <div className="fixed">
            <IntroductionSection />
          </div>
        </div>
        <div className="flex col-start-4 col-span-9">
          <div className="flex flex-col">
            <AboutMeSection />
            <SkillSection />
            <StatsSection />
            <XpSection />
          </div>
        </div>
      </div>
    </main>
  );
}
