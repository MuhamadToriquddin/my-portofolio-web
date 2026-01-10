interface buttonProps{
    onClick?:()=>void,
    label:string,
    type:string,
    disabled?:boolean,
    size?:string
}

export function Button (
    {onClick,label,type,disabled,size}:buttonProps
){
    return(
        <button className={`font-paragraph hover:scale-110 transition-all px-3 ${size == "sm"?"text-2xl":"text-3xl "}`} onClick={()=>onClick} disabled={disabled} type={type as React.ButtonHTMLAttributes<HTMLButtonElement>['type']}>
            [ {label} ]
        </button>
    )
}