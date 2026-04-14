import { ArrowRight, Star, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A84C]/5 blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 bg-[#1E1E1E] border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-8">
          <Star size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
          <span className="text-sm text-[#C9A84C] font-medium">+2.000 profissionais transformados com IA</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
          Domine a <span className="shimmer-text">Inteligência</span><br />
          <span className="shimmer-text">Artificial</span> e <br className="hidden md:block" />
          <span className="text-white">lidere o mercado</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#888888] max-w-2xl mx-auto mb-10 leading-relaxed">
          Cursos práticos e aplicados para quem quer usar IA de forma estratégica — não apenas ferramentas, mas <span className="text-[#C9A84C]">resultados reais</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#cursos" className="btn-gold px-8 py-4 rounded-full text-lg flex items-center gap-2 group">Ver Cursos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></a>
          <a href="#resultados" className="btn-outline-gold px-8 py-4 rounded-full text-lg">Ver Resultados</a>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center"><div className="flex items-center justify-center mb-1"><Users size={18} className="text-[#C9A84C]" /></div><div className="text-3xl font-black text-gold-gradient">2k+</div><div className="text-xs text-[#888888] mt-1">Alunos</div></div>
          <div className="text-center border-x border-[#2A2A2A]"><div className="flex items-center justify-center mb-1"><Award size={18} className="text-[#C9A84C]" /></div><div className="text-3xl font-black text-gold-gradient">15+</div><div className="text-xs text-[#888888] mt-1">Cursos</div></div>
          <div className="text-center"><div className="flex items-center justify-center mb-1"><Star size={18} className="text-[#C9A84C] fill-[#C9A84C]" /></div><div className="text-3xl font-black text-gold-gradient">4.9</div><div className="text-xs text-[#888888] mt-1">Avaliação</div></div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-[#888888] tracking-widest uppercase">Explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </div>
    </section>
  );
}