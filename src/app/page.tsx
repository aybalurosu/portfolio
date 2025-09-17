import {Hero, About, Skills, Projects, Contact} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact /> 
    </div>
  );
}
