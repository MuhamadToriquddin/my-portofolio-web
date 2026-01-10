import forgeApiImageHead from "../assets/image/works/mockup-forge cli-face.webp"
import simTravelHead from "../assets/image/works/mockup-SIM travel-face.jpg"
import forgeApiBody1 from "../assets/image/works/mockup-forge cli-body1.jpg"
import forgeApiBody2 from "../assets/image/works/mockup-forge cli-body2.jpg"
import simTravelBody1 from "../assets/image/works/mockup-SIM travel-body1.jpg"
import simTravelBody2 from "../assets/image/works/mockup-SIM travel-body2.jpg"

export const works = [
  {
    id:"01",
    image_head:forgeApiImageHead,
    image_body:[forgeApiBody1,forgeApiBody2], 
    title:"Forge API",
    description:"sasadasdasda",
    tech:["TS","Express"],
    type:"CLI Tool",
  },
  {
    id:"02",
    image_head:"",
    image_body:[""], 
    title:"Scrapping Maganghub",
    description:"",
    tech:["Python"],
    type:"CLI Tool",
  },
  {
    id:"03",
    image_head:simTravelHead,
    image_body:[simTravelBody1,simTravelBody2], 
    title:"SIM Travel",
    description:"",
    tech:["Next","Supabase"],
    type:"SIM",
  },
  
];
