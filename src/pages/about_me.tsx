import cardOri from "../assets/image/aboutme/card-ori.webp";
import cardCartoon from "../assets/image/aboutme/card-cartoon.webp";
import PixelTransition from "@/components/ui/PixelTransition";
import { PhilosophyContainer } from "@/components/fragments/philosopy_container";

function AboutMePage() {
  return (
    <section className="w-full grid grid-cols-1 pt-[150px] min-h-dvh space-y-[80px]">
      <div className="w-full grid md:grid-cols-2  px-15">
        <div className="flex  items-center ">
          <div className="space-y-4">
            <h1 className="font-heading text-black text-8xl">Muhamad Toriquddin</h1>
            <div className=""></div>
            <div className="flex space-x-0 py-2">
              <button className="font-paragraph text-3xl px-3  ">
                [ Let's Collaborate ]
              </button>
              <button className="font-paragraph text-3xl px-3 py-1 ">
                [ View My CV ]
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <div className="w-75  h-fit  drop-shadow-xl">
            <PixelTransition
              firstContent={
                <div
                  style={{ backgroundImage: `url(${cardCartoon})` }}
                  className={` w-full h-full bg-cover`}
                />
              }
              secondContent={
                <div
                  style={{ backgroundImage: `url(${cardOri})` }}
                  className={` w-full h-full bg-cover`}
                />
              }
              gridSize={12}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              aspectRatio="130%"
              className="custom-pixel-card"
            />
          </div>
        </div>
      </div>
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
