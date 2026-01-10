interface buttonSignatureProps{
    func?:()=>void,
    label:string,
    type:string,
    disabled:boolean,
    size?:string
}

function ButtonSignature({func,label,type,disabled,size}:buttonSignatureProps){
    return (
        <button className={`font-paragraph hover:scale-110 transition-all px-3 ${size == "sm"?"text-2xl":"text-3xl "}`} onClick={()=>func} disabled={disabled} type={type as React.ButtonHTMLAttributes<HTMLButtonElement>['type']}>
            [ {label} ]
        </button>
    )
}

export default ButtonSignature