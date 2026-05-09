import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { PageSlug } from "@smartbots/shared";
import { navItems, pageHref } from "../../app/navigation";

interface HeaderProps {
  currentPage: PageSlug;
}

export function Header({ currentPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar" aria-label="Navegación principal">
          <a className="logo" href={pageHref("inicio")} onClick={closeMenu} aria-label="Ir al inicio">
            <img src="/assets/logo-smartbots-wordmark.webp" alt="SMARTBOTS" />
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.slug}
                className={currentPage === item.slug ? "active" : undefined}
                href={pageHref(item.slug)}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a className="btn btn-primary nav-cta" href={pageHref("contacto")} onClick={closeMenu}>
            Solicitar diagnóstico
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
