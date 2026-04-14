import { CheckCircle, Target, BookOpen, Lightbulb } from "lucide-react";

const differentials = [
  { icon: Target, title: "100% Prático", text: "Nada de teoria desnecessária. Cada aula tem aplicação imediata no seu trabalho ou negócio." },
  { icon: BookOpen, title: "Conteúdo Atualizado", text: "IA muda todo mês. Nosso conteúdo é revisado continuamente para você estar sempre à frente." },
  { icon: Lightbulb, title: "Metodologia Própria", text: "Framework exclusivo de aprendizado que conecta conceito, ferramenta e aplicação real." },
  { icon: CheckCircle, title: "Suporte Ativo", text: "Comunidade exclusiva, sessões ao vivo e suporte direto com especialistas." },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Quem somos</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">Especialistas em<br /><span className="text-gold-gradient">formar gestores</span><br />de IA</h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-6">O <strong className="text-white">Gestor de IA</strong> nasceu da necessidade de um ensino de inteligência artificial que vai além do hype e entrega resultado concreto.</p>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">Nossa missão é formar profissionais que não apenas conhecem as ferramentas, mas que <span className="text-[#C9A84C] font-semibold">pensam estrategicamente com IA</span> para gerar valor real.</p>
            <div className="space-y-3">
              {["Mais de 2.000 profissionais formados", "Presença em 12 países", "Parceiros com as principais plataformas de IA", "Instrutores praticantes, não apenas teóricos"].map((item, i) => (
                <div key={i} className="flex items-center gap-3"><CheckCircle size={16} className="text-[#C9A84C] flex-shrink-0" /><span className="text-[#CCCCCC] text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((d, i) => { const Icon = d.icon; return (
              <div key={i} className="card-premium rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4"><Icon size={20} className="text-[#C9A84C]" /></div>
                <h3 className="text-white font-bold mb-2">{d.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{d.text}</p>
              </div>
            );})}
          </div>
        </div>
      </div>
    </section>
  );
}