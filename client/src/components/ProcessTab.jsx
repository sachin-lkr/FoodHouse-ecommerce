import { GrDeliver } from "react-icons/gr";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlantLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

const processList = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    name: "Sourcing",
    description: " It is a long established fact that a reader",
    icons: <PiPlantLight />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    name: "Manufacturing",
    description: " It is a long established fact that a reader",
    icons: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    name: "Quality Control",
    description: " It is a long established fact that a reader",
    icons: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    name: "Logistics",
    description: " It is a long established fact that a reader",
    icons: <GrDeliver />,
  },
];

function ProcessTab() {
 
  return processList.map((processList,index) => (
    <div key={index} className={`${processList.id%2===0?"md:-mt-45 ":""}`}>
      <span className="flex items-center justify-center md:size-16 size-12 md:text-8xl text-5xl mx-auto outline-[3px] outline-offset-3 outline-zinc-800 outline-dashed  rounded-full bg-zinc-800  text-white md:mb-8 my-4">{processList.number}</span>
      <div className="flex items-center gap-4">
        <span className=" flex md:text-4xl text-3xl p-4 text-white  rounded-full  items-center justify-center  bg-gradient-to-b from-orange-400 to-orange-500">{processList.icons}</span>

        <div className="flex-1">
          <h4 className="text-zinc-800 font-bold text-xl">{processList.name}</h4>
          <p className="text-zinc-600  ">{processList.description}</p>
        </div>
      </div>
    </div>
  ));
}
export default ProcessTab;
