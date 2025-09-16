import Image from "next/image";

export function Contact() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="text-center border-white border-1 rounded-2xl p-6 bg-white/10 backdrop-blur-sm shadow-lg">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className="flex space-x-4 justify-center mt-4 border-1 border-white rounded-full p-4 bg-white/10 backdrop-blur-sm shadow-lg">
          <a href="mailto:aybalurosu@gmail.com"><Image src={'/icons/linkedin.svg'} width={20} height={20} alt=""/></a>
          <a href=""><Image src={'/icons/linkedin.svg'} width={20} height={20} alt=""/></a>
          <a href=""><Image src={'/icons/linkedin.svg'} width={20} height={20} alt=""/></a>
        </div>
      </div> 
    </section>
  );
}