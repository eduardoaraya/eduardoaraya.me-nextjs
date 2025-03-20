import { AboutMeSection } from "@eduardoaraya/components/sections/aboutMeSection";
import { IntroductionSection } from "@eduardoaraya/components/sections/introSection";
import { SkillSection } from "@eduardoaraya/components/sections/skillSection";
import { Menu } from "@eduardoaraya/components/ui/menu";
import { PageLayout } from "@eduardoaraya/components/ui/page/pageLayout";

export default function Home() {
  return (
    <PageLayout
      aside={
        <>
          <IntroductionSection />
          <Menu isInline={false} />
        </>
      }
    >
      <AboutMeSection />
      <SkillSection />
    </PageLayout>
  );
}
