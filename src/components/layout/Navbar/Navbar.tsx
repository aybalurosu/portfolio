import "../../../app/globals.css";

export function Navbar() {
  return (
    <nav className="backdrop-blur-lg rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.11)] shadow-lg shadow-[rgba(0,0,0,0.2)]">
      <ul className="inline-flex gap-7 p-4">
        <li><a href="#hero" className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Home</a></li>
        <li><a href="#about"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">About</a></li>
        <li><a href="#skills"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Skills</a></li>
        <li><a href="#projects"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Project</a></li>
        <li><a href="#contact"  className="text-[var(--text-color)] p-2 px-4 rounded-full border-1 border-transparent transition-all hover:text-[var(--hover-text-color)] hover:border-amber-50">Contact</a></li>
      </ul>
    </nav>
  );
}