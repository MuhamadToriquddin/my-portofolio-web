import useSound from "use-sound"
import clickSound from "../../assets/audio/click.mp3"
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
  const [playClick]=useSound(clickSound,{volume:0.2})
    const click = ()=>{
        if (onClick){
            onClick()
            playClick()
        }
        playClick()
    }
    return(
        <button className={`font-paragraph hover:scale-110 transition-all px-3 ${size == "sm"?"text-2xl":"text-3xl "}`} onClick={click} disabled={disabled} type={type as React.ButtonHTMLAttributes<HTMLButtonElement>['type']}>
            [ {label} ]
        </button>
    )
}