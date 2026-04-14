export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-xl font-black mb-4"><span className="text-gold-gradient">Gestor</span><span className="text-white"> de IA</span></div>
            <p className="text-[#666666] text-sm leading-relaxed max-w-xs">Formando os gestores de IA do futuro. Aprendizado prático, resultados reais.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Cursos</h4>
            <ul className="space-y-2">{["IA para Gestores", "ChatGPT Avançado", "Automações com IA", "IA para Vendas", "Formação Completa"].map((item) => (<li key={item}><a href="#cursos" className="text-[#666666] text-sm hover:text-[#C9A84C] transition-colors">{item}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2">{[{ label: "Sobre nós", href: "#sobre" }, { label: "Resultados", href: "#resultados" }, { label: "FAQ", href: "#faq" }, { label: "Contato", href: "mailto:contato@gestordeia.com.br" }].map((item) => (<li key={item.label}><a href={item.href} className="text-[#666666] text-sm hover:text-[#C9A84C] transition-colors">{item.label}</a></li>))}</ul>
          </div>
        </div>
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444444] text-xs">© {new Date().getFullYear()} Gestor de IA. Todos os direitos reservados.</p>
          <div className="flex gap-6"><a href="#" className="text-[#444444] text-xs hover:text-[#C9A84C] transition-colors">Privacidade</a><a href="#" className="text-[#444444] text-xs hover:text-[#C9A84C] transition-colors">Termos de Uso</a></div>
        </div>
      </div>
    </footer>
  );
}