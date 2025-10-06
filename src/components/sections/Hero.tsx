
export function Hero() {
  return (
    <section id="hero" className="flex flex-col items-start justify-center gap-10 w-full h-screen px-8">
      <div className="flex flex-col items-start justify-start gap-4">
        <h1 className="text-[#d3b6b6] font-bold text-3xl lg:text-7xl">I&apos;m Alexinia Balutescu Rosu</h1>
        <h2 className="text-[#d3b6b6] font-semibold lg:text-xl">FullStack Developer & Designer</h2>
        <p className="text-[#d3b6b6] font-norma max-w-2xl">
          I create beautiful and functional web applications using the latest technologies and best practices.
        </p>
      </div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#D3B6B6] rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 hover:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-[#0F1012] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Download CV
        </span>
      </button>
    </section>
  );
}