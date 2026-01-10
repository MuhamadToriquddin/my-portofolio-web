import { useIsPhoneDevice } from "@/hooks/useIsPhoneDevice"
import ContactForm from "@/components/fragments/form_contact"
import { SocialMediaContainer } from "@/components/fragments/socialmedia_container"
function ContactPage(){
    const isPhone = useIsPhoneDevice()
    return (
        <>
            {isPhone?(
                <div></div>
            ):(
                <section className="grid grid-cols-2 p-[20px] w-full pt-[150px] min-h-dvh ">
                    <div>
                        <SocialMediaContainer/>
                    </div>
                    <div className="">
                        
                        <ContactForm/>
                    </div>
                </section>
            )}
        </>
    )
}

export default ContactPage