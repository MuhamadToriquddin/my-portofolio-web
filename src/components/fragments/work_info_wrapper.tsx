interface infoWorkWrapperProps {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: string;
}

export function InfoWorkWrapper(
    {id,title,description,tech,type}:infoWorkWrapperProps
) {
    return(
        <div className="space-y-3 h-fit">
            <p className="font-heading text-2xl">{id}</p>
            <div>
                <h1 className="font-heading text-4xl">{title}</h1>
                <p className="w-fit font-paragraph px-2 text-xl py-1 bg-black text-white">{type}</p>
            </div>
            <p className="font-paragraph text-lg">{description}</p>
            <div>
                {tech.map((item,i)=>(
                    <span key={i}>{item}</span>
                ))}
            </div>
        </div>
    )
}
