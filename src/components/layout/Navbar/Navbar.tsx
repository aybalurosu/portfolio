import "../../../app/globals.css";

export function Navbar() {
  return (
    <nav className="bg-[#1f2937c4] rounded-4xl border-1 border-[#1b1c24] shadow-[#8b8c908e] shadow-sm backdrop-blur-sm">
        <ul className="flex justify-around text-white p-4">
          <li id="hero"><a className="text-[var(--text-color)] hover-menu hover:text-[var(--hover-text-color)]">Home</a></li>
          <li id="about"><a className="text-[var(--text-color)] hover-menu hover:text-[var(--hover-text-color)]">About</a></li>
          <li id="skills"><a className="text-[var(--text-color)] hover-menu hover:text-[var(--hover-text-color)]">Skills</a></li>
          <li id="projects"><a className="text-[var(--text-color)] hover-menu hover:text-[var(--hover-text-color)]">Project</a></li>
          <li id="contact"><a className="text-[var(--text-color)] hover-menu hover:text-[var(--hover-text-color)]">Contact</a></li>
        </ul>
    </nav>
  );
}