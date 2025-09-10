import Image from "next/image";

export function Hero() {
  return (
    <div className="p-4 flex flex-col lg:flex-row md:flex-row items-center justify-center gap-4">
      <div className="bg-[#a5b3c6c6] p-4 rounded-lg w-full lg:w-1/2 md:w-1/2 shadow-[#4a4a4a] shadow-md backdrop-blur-2xl">
          {/* componente card - photo */}
          <div className={"bg-[#a99cb0] p-2 rounded-lg rotate-[3deg] w-auto h-[200px] m-10 shadow-[#4d4555] shadow-lg"}>
            <Image src={""} alt={""} width={0} height={0} />
          </div>
          {/* componente  */}
      </div>
    </div>
  );
}