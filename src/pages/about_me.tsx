import { HeroContainer } from "@/components/fragments/hero_container";
import { PhilosophyContainer } from "@/components/fragments/philosopy_container";

function AboutMePage() {
  return (
    <section className="w-full grid grid-cols-1 pt-[150px] min-h-dvh space-y-[80px]">
      <HeroContainer/>
      <div className="bg-foreground">
        <PhilosophyContainer/>
      </div>
      

      <div className="px-[40px]">
        <h1 className="text-center font-heading text-5xl">Tech Stacks</h1>
        <div className="mt-[40px] flex w-full h-[360px] justify-center "></div>
      </div>
    </section>
  );
}

export default AboutMePage;
