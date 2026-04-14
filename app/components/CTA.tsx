import { ArrowRight, Shield, Clock, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-12 text-center overflow-hidden" style={{ background: "linear-gradient(145deg, #1A1505 0%, #0F0D03 50%, #1A1505 100%)", border: "1px solid rgba(201,168,76,0.3)", boxShadow: "0 0 80px rgba(201,168,76,0.1)" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C9A84C]/10 blur-[60px]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-4 py-2 mb-8"><Zap size={14} className="text-[#C9A84C]" /><span className="text-sm text-[#C9A84C] font-medium">Vagas limitadas — turma atual quase cheia</span></div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Comece hoje a<br /><span className="shimmer-text">dominar a IA</span></h2>
            <p className="text-[#888888] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">Junte-se a mais de 2.000 profissionais que já transformaram suas carreiras e negócios com inteligência artificial.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-[#CCCCCC] text-sm"><Shield size={16} className="text-[#C9A84C]" />Garantia de 7 dias</div>
              <div className="hidden sm:block w-px h-4 bg-[#2A2A2A]" />
              <div className="flex items-center gap-2 text-[#CCCCCC] text-sm"><Clock size={16} className="text-[#C9A84C]" />Acesso vitalício</div>
              <div className="hidden sm:block w-px h-4 bg-[#2A2A2A]" />
              <div className="flex items-center gap-2 text-[#CCCCCC] text-sm"><Zap size={16} className="text-[#C9A84C]" />Início imediato</div>
            </div>
            <a href="#cursos" className="btn-gold px-10 py-5 rounded-full text-xl inline-flex items-center gap-3 group">Quero Começar Agora <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" /></a>
            <p className="text-[#444444] text-sm mt-6">Ou entre em contato: <a href="mailto:contato@gestordeia.com.br" className="text-[#C9A84C] hover:underline">contato@gestordeia.com.br</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}