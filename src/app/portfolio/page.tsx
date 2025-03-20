import { IntroductionSection } from "@eduardoaraya/components/sections/introSection";
import { Menu } from "@eduardoaraya/components/ui/menu";
import { PageLayout } from "@eduardoaraya/components/ui/page/pageLayout";
import { TitleSescion } from "@eduardoaraya/components/ui/title/titleSection";

export default function Portfolio() {
  return (
    <PageLayout
      aside={
        <>
          <IntroductionSection />
          <Menu isInline={false} />
        </>
      }
    >
      <TitleSescion>Portfolio</TitleSescion>
    </PageLayout>
  );
}
