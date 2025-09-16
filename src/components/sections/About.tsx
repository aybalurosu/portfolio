import Image from "next/image";

export function About() {
  return (
    <section className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 min-h-screen">
      {/* component */}
      <div className="p-4 rounded-lg w-auto lg:w-1/2 md:w-1/2
       shadow-[#4a4a4a] shadow-md backdrop-blur-2xl flex flex-col items-center justify-center gap-4">
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer with experience in building
          responsive and user-friendly web applications. I love creating
          beautiful and functional interfaces that provide an excellent user
          experience.
        </p>
      </div>
      {/* component */}
      <div className="rounded-lg w-auto lg:w-1/2 md:w-1/2
       shadow-[#4a4a4a] shadow-md backdrop-blur-2xl flex flex-col items-center justify-center gap-4">
        <Image src={"/hero/avatar.jpeg"} alt="" width={300} height={100} className="rounded-xl"/> 
      </div>
    </section>
  );
}