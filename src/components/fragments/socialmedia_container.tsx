import { SocialMediaCard } from "./social_media_card";
import { socialMedia } from "@/data/social_media";
export function SocialMediaContainer() {
  return (
    <div className="w-full h-fit space-y-[40px]">
      <h1 className="text-4xl font-heading text-center pl-15">My Social Media</h1>
      <div className="grid grid-cols-3 w-full gap-5 pl-15">
        {socialMedia.map((item, i) => (
          <SocialMediaCard key={i} icon={item.icon} label={item.label} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
}
