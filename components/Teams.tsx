import Image from "next/image";
import { teamData } from "@/constants/teams";

export default function Teams() {
  return (
    <div className="flex flex-col items-center p-4  gap-8 mt-10">
      <div
        style={{ fontFamily: "Thunder" }}
        className="text-4xl flex flex-row items-center gap-4"
      >
        <div className="h-0.5 w-8 bg-[#223DB9] tracking-widest"></div>
        <h1
          className="text-4xl tracking-wide"
          style={{ fontFamily: "Thunder" }}
        >
          TEAM
        </h1>
        <div className="h-0.5 w-8 bg-[#FF00FF]"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2">
        {teamData.map((member) => (
          <div
            className="bg-[#F7F7F7] p-4 flex flex-col items-center justify-center gap-2 rounded-[40px] w-40 h-40"
            key={member.role}
          >
            <div
              className="border-3 shadow-sm shadow-gray-300 rounded-xl overflow-hidden border-white bg-[radial-gradient(circle_at_bottom,#c7c3f5,#e5e7eb_60%)] 
  flex items-end justify-center"
            >
              <Image
                src={member.image}
                alt="profile-img"
                width={70}
                height={70}
              ></Image>
            </div>
            <div className="flex flex-col items-start leading-3 w-full">
              <span className="tracking-wide" style={{ fontFamily: "ThunderMedium" }}>
                {member.name}
              </span>
              <span className="font-light text-[8px]">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
