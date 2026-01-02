import { useIsPhoneDevice } from "../hooks/useIsPhoneDevice";

function AboutMePage() {
  const isPhone = useIsPhoneDevice();
  return <>{isPhone ? <div></div> : (
   <section className="w-full min-h-dvh flex justify-between ">

   </section> 
  )}</>;
}

export default AboutMePage;
