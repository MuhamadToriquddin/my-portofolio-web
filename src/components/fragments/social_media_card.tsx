import { ReactNode } from "react";

import { Link } from "react-router-dom";
interface socialMediaCardProps {
  icon: ReactNode;
  label: string;
  name: string;
  url:string
}

export function SocialMediaCard({ icon, label, name, url }: socialMediaCardProps) {
    
  return (
    <Link className="w-full flex items-center justify-center h-[280px] relative pixel-border" to={url}>
        <h5 className="text-center font-heading text-3xl absolute top-5">{label}</h5>
        
            <div className="flex justify-center">
                {icon}
            </div>
            <div className="w-[100px]  wrap-break-word absolute bottom-5">
                <p className=" text-xl font-paragraph text-center">{name}</p>
            </div>
        
        
    </Link>
  );
}
