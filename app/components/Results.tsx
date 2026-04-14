import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Rafael Mendes", role: "Diretor Comercial", company: "TechSales BR", text: "Em 3 semanas implementei automações que economizaram 20 horas semanais da minha equipe. O ROI foi imediato.", result: "20h/semana economizadas", avatar: "RM" },
  { name: "Ana Paula Costa", role: "Empreendedora Digital", company: "AP Marketing", text: "Faturei R$47k no mês seguinte ao curso usando IA para criar campanhas e automatizar meu funil.", result: "+R$47k no mês seguinte", avatar: "AC" },
  { name: "Marcos Oliveira", role: "Gerente de Projetos", company: "Construindo Digital", text: "Consegui uma promoção 3 meses depois do curso. Meu chefe ficou impressionado com as análises entregues com IA.", result: "Promoção em 3 meses", avatar: "MO" },
  { name: "Camila Ferreira", role: "Consultora de RH", company: "CF Consultoria", text: "Reduzi meu tempo de análise de currículos de 4 horas para 20 minutos. Consigo atender o dobro de clientes.", result: "Produtividade 12x maior", avatar: "CF" },
  { name: "Bruno Santos", role: "Desenvolvedor", company: "Freelancer", text: "Com IA, agora entrego projetos em metade do tempo e cobro 3x mais caro. Minha renda passou de R$8k para R$22k.", result: "Renda triplicada em 6 meses", avatar: "BS" },
  { name: "Juliana Lima", role: "CEO", company: "Lima Educação", text: "Transformei meu negócio usando IA. Automatizei onboarding, suporte e conteúdo. Escalar ficou muito mais fácil.", result: "Negócio escalado 4x", avatar: "JL" },
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Resultados reais</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Quem aprende,<br /><span className="text-gold-gradient">transforma</span></h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto">Não são promessas. São histórias reais de pessoas que aplicaram o que aprenderam.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-premium rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex gap-1">{[...Array(5)].map((_, s) => (<Star key={s} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />))}</div>
              <div className="relative"><Quote size={20} className="text-[#C9A84C]/30 absolute -top-1 -left-1" /><p className="text-[#CCCCCC] text-sm leading-relaxed pl-4">{t.text}</p></div>
              <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-lg px-3 py-2"><span className="text-[#C9A84C] text-xs font-bold">✦ {t.result}</span></div>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#2A2A2A]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A0822A] flex items-center justify-center text-black text-xs font-black flex-shrink-0">{t.avatar}</div>
                <div><div className="text-sm font-semibold text-white">{t.name}</div><div className="text-xs text-[#666666]">{t.role} · {t.company}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ value: "2.000+", label: "Alunos formados" }, { value: "95%", label: "Taxa de satisfação" }, { value: "3x", label: "Média de aumento de renda" }, { value: "4.9/5", label: "Avaliação média" }].map((stat, i) => (
            <div key={i} className="text-center p-6 card-premium rounded-2xl"><div className="text-3xl font-black text-gold-gradient mb-1">{stat.value}</div><div className="text-sm text-[#888888]">{stat.label}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}