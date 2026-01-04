import ScrollReveal from "../ui/scroll_reveal";

function BioCard() {
  return (
    <div className="flex border-5 border-black w-[1000px] shadow-lg  py-[10px] px-[20px] space-x-3">
      <div className="w-[450px] h-full border-2 border-black"></div>
      <div className="w-[500px]">
        <p className="text-sm font-paragraph">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Hello there, My name is Toriq and currently graduated from
            Information System Major with focused on backend development. I'm passionate about behind the scenes
            from system and I'm seeking my first professional home in IT role
            where I can turn my curriosity into clean and scalable code.
          </ScrollReveal>
        </p>
      </div>
    </div>
  );
}

export default BioCard;
