import { AboutMeSection } from "@eduardoaraya/components/sections/aboutMeSection";
import { IntroductionSection } from "@eduardoaraya/components/sections/introSection";
import { SkillSection } from "@eduardoaraya/components/sections/skillSection";
import { Menu } from "@eduardoaraya/components/ui/menu";
import { PageLayout } from "@eduardoaraya/components/ui/page/pageLayout";
import { TitleSescion } from "@eduardoaraya/components/ui/title/titleSection";

export default function Contact() {
  return (
    <PageLayout
      aside={
        <>
          <IntroductionSection />
          <Menu isInline={false} />
        </>
      }
    >
      <TitleSescion>Contact</TitleSescion>
    </PageLayout>
  );
}
