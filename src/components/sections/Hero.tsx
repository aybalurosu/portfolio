import Image from "next/image";

export function Hero() {
  return (
    <section className="p-4 flex flex-col lg:flex-row md:flex-row items-center justify-center gap-4">
      {/* component */}
      <div className="bg-[#f8cdebc6] p-4 rounded-lg w-auto lg:w-1/2 md:w-1/2
       shadow-[#4a4a4a] shadow-md backdrop-blur-2xl flex flex-col items-center justify-center gap-4">
        <Image src={"/hero/avatar.jpeg"} alt="" width={300} height={100} className="rounded-xl"/> 
        <h2>Alexinia Balutescu</h2>
        <h3>Frontend Developer</h3> 
        {/*component*/}
        <div className="flex flex-row gap-4">
          <a href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/" target="_blank" rel="noopener noreferrer">
            <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/" target="_blank" rel="noopener noreferrer">
            <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/" target="_blank" rel="noopener noreferrer">
            <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/" target="_blank" rel="noopener noreferrer">
            <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
          </a>
        </div>
        {/* component */}
        <button className="bg-[#4a4a4a] text-white px-4 py-2 rounded-lg hover:bg-[#333333] transition">Let's Talk</button>
      </div>
    </section>
  );
}