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
            
            <div>
                <p className="font-heading text-3xl">{id}</p>
                <h1 className="font-heading text-6xl">{title}</h1>
                
            </div>
            <p className="w-fit font-paragraph px-2 text-xl py-1 bg-black text-white select-none">{type}</p>
            <p className="font-paragraph text-lg">{description}</p>
            <div className="space-x-3">
                {tech.map((item,i)=>(
                    <span key={i} className="font-paragraph select-none bg-gray-100 hover:bg-gray-200 px-2 py-1">{item}</span>
                ))}
            </div>
        </div>
    )
}
