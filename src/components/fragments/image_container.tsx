import { useState } from "react";

export function ImageContainer({ img }: { img: string[] }) {
  const [selected, setSelected] = useState<number>(0);
  const onClick = (index: number) => {
    setSelected(index);
  };
  return (
    <div className="h-fit space-y-5 pl-[20px]">
      {/* Main Image Container */}
      <div className="overflow-hidden border-2 border-black w-full h-[300px] pixel-border">
        <img
          src={img[selected]}
          alt="main image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails Grid */}
      <div className="gap-2 grid grid-cols-4 w-full">
        {img.map((item, i) => (
          <div
            key={i}
            className={`h-[80px] cursor-pointer overflow-hidden border-3   ${i == selected?"border-black":"border-slate-200"}`}
            onClick={() => onClick(i)}
          >
            <img
              src={item}
              alt={`option ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
