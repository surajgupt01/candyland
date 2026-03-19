import { data } from "@/constants/meut";

export default async function Features({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  const slug = decodeURIComponent(section);
  console.log(slug);

  const Logo = data[slug].logo;

  return (
    // 1. Changed to min-h-screen to prevent overflow, flex-col on mobile, flex-row on large screens
    <div className="px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row min-h-screen gap-6">
      
      {/* 2. Hidden the vertical divider on mobile screens, visible on lg screens */}
      <div
        className="hidden lg:block w-1 h-screen 
          bg-[linear-gradient(to_bottom,#9ca3af_0_50%,transparent_50%_100%)] 
          bg-size-[1px_2%] 
          [background-repeat:no-repeat_repeat]"
      ></div>

     
      <div className="relative flex flex-col w-full pb-20 lg:pb-0">
        
       
        <div className="px-0 py-10 lg:px-10 lg:py-30 flex-1 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          
          <div className="flex-1 flex flex-col gap-6 lg:gap-20">
           
            <div
              style={{ fontFamily: "Thunder" }}
              className="text-6xl md:text-8xl tracking-wide w-full lg:w-80"
            >
              {data[slug].subpage}
            </div>
            <div className="text-[#414141] text-sm lg:text-xs w-full max-w-2xl text-justify">
              {data[slug].description}
            </div>
          </div>

          <div className="flex-1 flex lg:p-6 flex-col items-center md:items-center lg:items-center justify-start gap-8 lg:gap-10">
            <Logo w={150} h={150} />
            <div>
              <h1 className="text-xl lg:text-2xl my-4 font-light">Formate : </h1>
              {data[slug].formats.map((e: string) => (
                <div className="leading-8 text-sm text-[#414141]" key={e}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 border border-gray-100 rounded-full gap-2 flex flex-row items-center justify-between py-1 px-1 pl-4 min-w-[220px] bg-linear-to-r from-white to-black/10 shadow-sm backdrop-blur-sm">
          <span
            className="text-zinc-700 tracking-wide text-xl"
            style={{ fontFamily: "Thunder" }}
          >
            {data[slug].subpage}
          </span>
          <div className="rounded-full flex justify-center items-center bg-black w-14 h-10 shadow-md shadow-gray-400 cursor-pointer hover:bg-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}