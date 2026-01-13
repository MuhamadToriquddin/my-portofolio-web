import PixelTransition from "../ui/PixelTransition";
import cardOri from "../../assets/image/aboutme/card-ori.webp";
import cardCartoon from "../../assets/image/aboutme/card-cartoon.webp";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export function HeroContainer() {
  const navigate = useNavigate()
  const clickCollaborate = ()=>{
    navigate("/contact")
  }
  
  return (
    <div className="w-full grid md:grid-cols-2">
      <div className="flex  items-center pl-15">
        <div className="space-y-4">
          <h1 className="font-heading text-black text-8xl">
            Muhamad Toriquddin
          </h1>
          <div className=""></div>
          <div className="flex space-x-0 py-2">
            <Button label="Let's Collaborate" onClick={clickCollaborate} type="" />
            <a href="/master cv.pdf" download={"CV Muhamad Toriquddin"}>
              <Button label="View My CV" type="" />
            </a>
            
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
  );
}
