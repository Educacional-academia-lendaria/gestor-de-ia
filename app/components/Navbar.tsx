"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Cursos", href: "#cursos" },
    { label: "Resultados", href: "#resultados" },
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight">
            <span className="text-gold-gradient">Gestor</span>
            <span className="text-white"> de IA</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (<a key={link.href} href={link.href} className="text-sm text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-200">{link.label}</a>))}
        </div>
        <div className="hidden md:block">
          <a href="#cursos" className="btn-gold px-6 py-2.5 rounded-full text-sm">Quero Começar</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#141414] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (<a key={link.href} href={link.href} className="text-[#CCCCCC] hover:text-[#C9A84C] transition-colors" onClick={() => setMenuOpen(false)}>{link.label}</a>))}
          <a href="#cursos" className="btn-gold px-6 py-3 rounded-full text-sm text-center mt-2" onClick={() => setMenuOpen(false)}>Quero Começar</a>
        </div>
      )}
    </nav>
  );
}