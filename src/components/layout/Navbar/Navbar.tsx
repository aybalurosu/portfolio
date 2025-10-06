import "../../../app/globals.css";

export function Navbar() {
  return (
    <nav className="backdrop-blur-sm rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.11)] shadow-lg shadow-[rgba(0,0,0,0.2)]">
      <ul className="p-4 hidden md:flex lg:flex justify-between">
        <li><a href="#hero" className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Home</a></li>
        <li><a href="#about"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">About</a></li>
        <li><a href="#skills"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Skills</a></li>
        <li><a href="#projects"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Project</a></li>
        <li><a href="#contact"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Contact</a></li>
      </ul>
      <ul className="p-4 flex md:hidden lg:hidden justify-between">
        <li><a href="#hero"></a>	🏠 </li>
        <li><a href="#about"  ></a> 👩‍💻</li>
        <li><a href="#skills"  ></a>💡</li>
        <li><a href="#projects"  ></a>🚀</li>
        <li><a href="#contact"  ></a>	📧 </li>
      </ul>
    </nav>
  );
}