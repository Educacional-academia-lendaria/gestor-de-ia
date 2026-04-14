import { X, Check } from "lucide-react";

const problems = ["Vê colegas usando IA e ficando para trás", "Perde horas em tarefas que poderiam ser automatizadas", "Não sabe por onde começar com tantas ferramentas", "Tem medo de ser substituído pela tecnologia"];
const solutions = ["Domina IA e se torna referência na sua área", "Automatiza processos e ganha tempo para o que importa", "Aprende o caminho certo, sem enrolação", "Usa IA como aliada para multiplicar seus resultados"];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">A realidade do mercado</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Você reconhece<br /><span className="text-gold-gradient">alguma dessas situações?</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-premium rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center"><X size={18} className="text-red-400" /></div><h3 className="text-xl font-bold text-white">Sem IA</h3></div>
            <div className="space-y-4">{problems.map((p, i) => (<div key={i} className="flex items-start gap-3"><X size={16} className="text-red-400 mt-0.5 flex-shrink-0" /><span className="text-[#888888]">{p}</span></div>))}</div>
          </div>
          <div className="card-premium rounded-2xl p-8" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
            <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center"><Check size={18} className="text-[#C9A84C]" /></div><h3 className="text-xl font-bold text-white">Com <span className="text-gold-gradient">Gestor de IA</span></h3></div>
            <div className="space-y-4">{solutions.map((s, i) => (<div key={i} className="flex items-start gap-3"><Check size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" /><span className="text-[#CCCCCC]">{s}</span></div>))}</div>
          </div>
        </div>
        <div className="text-center mt-16"><p className="text-xl text-[#888888] max-w-2xl mx-auto">O mercado não espera. Quem dominar IA agora vai <span className="text-white font-semibold">ditar as regras amanhã.</span></p></div>
      </div>
    </section>
  );
}