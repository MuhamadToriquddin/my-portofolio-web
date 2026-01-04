import { useIsPhoneDevice } from "@/hooks/useIsPhoneDevice"
import ContactForm from "@/components/fragments/form_contact"
function ContactPage(){
    const isPhone = useIsPhoneDevice()
    return (
        <>
            {isPhone?(
                <div></div>
            ):(
                <section className="grid grid-cols-2 p-[20px] w-full pt-[150px] min-h-dvh ">
                    <div></div>
                    <div className="">
                        <ContactForm/>
                    </div>
                </section>
            )}
        </>
    )
}

export default ContactPage