interface buttonSignatureProps{
    func?:()=>void,
    label:string,
    type:string,
    disabled:boolean,
    size?:string
}

function ButtonSignature({func,label,type,disabled,size}:buttonSignatureProps){
    return (
        <button className={`font-paragraph px-3 ${size == "sm"?"text-xl":"text-3xl "}`} onClick={()=>func} disabled={disabled} type={type as React.ButtonHTMLAttributes<HTMLButtonElement>['type']}>
            [ {label} ]
        </button>
    )
}

export default ButtonSignature