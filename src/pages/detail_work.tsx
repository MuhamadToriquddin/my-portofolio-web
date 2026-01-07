import { useParams } from "react-router-dom";
import { getWorks } from "@/lib/get_work";
import { InfoWorkWrapper } from "@/components/fragments/work_info_wrapper";
import { ImageContainer } from "@/components/fragments/image_container";
function DetailWorkPage() {
  const {id} = useParams()
  if (!id){
    return
  }

  const data = getWorks(id)
  return (
    <section className="pt-[150px] gap-4 px-[40px] grid grid-cols-2">
        {/* picture container */}
        <ImageContainer img={data.image_body} />
        {/* teks container */}
        <InfoWorkWrapper title={data.title} description={data.description} id={data.id} tech={data.tech} type={data.type} />
    </section>
  );
};

export default DetailWorkPage;