import Image from "next/image";
import { ButtonConnect } from "../Button";

export function CardInfo() {
  return (
    <div
      className="bg-[#a49aa1c6] p-4 rounded-2xl w-auto h-full
           shadow-[#4a4a4a] shadow-md backdrop-blur-2xl flex flex-col items-center justify-center gap-4"
    >
      <Image
        src={"/hero/avatar.jpeg"}
        alt=""
        width={300}
        height={100}
        className="rounded-xl"
      />
      <h2>Alexinia Balutescu</h2>
      <h3>Frontend Developer</h3>
      <div className="flex flex-row gap-4">
        <a
          href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexinia-balutescu-5b4b3b1b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/icons/linkedin.svg"} alt="" width={30} height={30} />
        </a>
      </div>
      <ButtonConnect />
    </div>
  );
}
