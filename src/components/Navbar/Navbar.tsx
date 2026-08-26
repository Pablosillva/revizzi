import { NavLink } from "react-router-dom";
import { Wrench } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
];

function Navbar() {
  return (
    <header className="w-full border-b border-[var(--border)]">
      <nav className="h-20 max-w-[1320px] mx-auto px-8 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-[var(--text-primary)] no-underline">
          <Wrench size={22} className="text-[var(--primary)]" />
          Revizzi
        </NavLink>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm no-underline transition-colors duration-200 ${
                  isActive ? "text-[var(--primary)]" : "text-[var(--text-secondary)] hover:text-[var(--primary)]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;