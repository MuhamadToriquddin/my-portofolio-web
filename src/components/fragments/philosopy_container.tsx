import { StatCard } from "./stat_card"
import {stat} from "../../data/stat"
export function PhilosophyContainer(){
    return(
        <div className="grid md:grid-cols-2 py-15 px-15">
            <div className="space-y-4 ">
                <h1 className="text-background font-heading text-6xl">About Me</h1>
                <p className="text-background font-paragraph text-3xl">hdashdaskjashjasjkhakshfjksjkhasjkhash jkahjkfhjkahjkhakjs</p>
            </div>
            <div className="grid grid-cols-2  gap-3 px-4">
                {stat.map((item,i)=>(
                    <StatCard key={i} label={item.label} value={item.value}/>
                ))}
                
                                
            </div>
        </div>
    )
}