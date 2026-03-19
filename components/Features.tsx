"use client"

import BrandsExp from "@/Icons/Brand";
import Culture from "@/Icons/Culture";
import Eduaction from "@/Icons/Education";
import Tech from "@/Icons/Tech";
import { useRouter } from "next/navigation";

export default function Features() {


  const features = [
    {
      route : `Brand&Experience`,
      title : `Brand & Experience `,
      logo : BrandsExp
    },
     {
      route : `Culture&Community`,

      title : `Culture & Community `,
      logo : Culture
    },
     {
      route : `Education&Wellbeing`,

      title : `Education & Wellbeing `,
      logo : Eduaction
    },
     {
      route : `tech-future-urban-lab`,

      title : `Tech, Future & Urban Lab `,
      logo : Tech
    }
  ]


  const router = useRouter()
  return (
    <div className="flex flex-col items-center p-4  gap-8">


    <div style={{ fontFamily: "Thunder" }} className="text-4xl flex flex-row items-center gap-4">
      <div className="h-0.5 w-8 bg-[#223DB9] tracking-widest"></div>
       <span className="text-center">URBANER EXPERIMENTIERRAUM</span>
      <div className="h-0.5 w-8 bg-[#FF00FF]"></div>

      
    </div>
    <p className="lg:w-[40%] text-center text-xs">
      THE SPACE ist ein urbaner Experimentierraum am Kurfürstendamm in Berlin – ein Ort, an dem Marken, Kultur, Technologie und Community aufeinandertreffen. So entsteht mitten in der Stadt ein offener Ort für Ideen, Begegnungen und neue Perspektiven.
    </p>

    <div className="flex flex-col items-center gap-6">
      <p className="text-sm font-normal text-[#414141]">Unsere Arbeit bewegt sich entlang von vier zentralen Säulen:</p>

      <div className="flex lg:flex-row flex-wrap items-center gap-2 justify-center ">
        
        {features.map((e)=>(
          <button onClick={()=>router.push(`/Features/${e.route}`)} key={e.title} className="bg-[#F7F7F7] rounded-[40px] gap-2 p-4 flex flex-col items-center justify-center w-40 h-40 hover:bg-gray-100 cursor-pointer duration-300 ease-in-out">
            <e.logo w = {90} h={90}/>
            <p className=" text-2xl  text-center leading-5" style={{fontFamily : 'ThunderMedium',}}>{e.title}</p>
          </button>
        ))}

      </div>
    </div>
    </div>

  );
}
