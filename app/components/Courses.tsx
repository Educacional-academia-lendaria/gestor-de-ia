import { ArrowRight, Clock, Users, Star, Zap, Brain, Bot, TrendingUp, Code, Layers } from "lucide-react";

const courses = [
  { icon: Brain, tag: "Mais Vendido", tagColor: "bg-[#C9A84C] text-black", title: "IA para Gestores e Líderes", description: "Aprenda a usar IA para tomar decisões mais rápidas, liderar equipes com dados e automatizar processos gerenciais.", duration: "8h de conteúdo", students: "890 alunos", rating: "4.9", highlight: true },
  { icon: Bot, tag: "Novo", tagColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30", title: "ChatGPT & Claude Avançado", description: "Do básico ao avançado: prompt engineering, automações, fluxos de trabalho e uso estratégico de LLMs.", duration: "6h de conteúdo", students: "1.2k alunos", rating: "4.8", highlight: false },
  { icon: Zap, tag: "Prático", tagColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30", title: "Automações com IA", description: "Crie fluxos automáticos usando Make, Zapier e IA — sem programar. Economize horas toda semana.", duration: "5h de conteúdo", students: "670 alunos", rating: "5.0", highlight: false },
  { icon: TrendingUp, tag: "Alto Impacto", tagColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30", title: "IA para Vendas e Marketing", description: "Use IA para criar campanhas, copywriting de alta conversão, análise de dados e estratégias de crescimento.", duration: "7h de conteúdo", students: "540 alunos", rating: "4.9", highlight: false },
  { icon: Code, tag: "Técnico", tagColor: "bg-orange-500/20 text-orange-400 border border-orange-500/30", title: "Python para IA — Do Zero", description: "Aprenda Python aplicado à IA: análise de dados, automações, APIs de IA e criação de agentes simples.", duration: "12h de conteúdo", students: "320 alunos", rating: "4.8", highlight: false },
  { icon: Layers, tag: "Completo", tagColor: "bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/30", title: "Formação Completa em IA", description: "O programa mais completo: do conceito à aplicação prática. Todos os cursos em uma trilha estruturada.", duration: "40h de conteúdo", students: "280 alunos", rating: "5.0", highlight: false },
];

export default function Courses() {
  return (
    <section id="cursos" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Nossos cursos</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Aprenda IA do jeito<br /><span className="text-gold-gradient">que o mercado exige</span></h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto">Conteúdo 100% prático, atualizado constantemente e focado em resultados reais.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => { const Icon = course.icon; return (
            <div key={i} className={`card-premium rounded-2xl p-6 flex flex-col gap-4 ${course.highlight ? "gold-glow" : ""}`} style={course.highlight ? { borderColor: "rgba(201,168,76,0.4)" } : {}}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.tagColor}`}>{course.tag}</span>
                <div className="flex items-center gap-1"><Star size={12} className="text-[#C9A84C] fill-[#C9A84C]" /><span className="text-xs text-[#C9A84C] font-semibold">{course.rating}</span></div>
              </div>
              <div className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0"><Icon size={20} className="text-[#C9A84C]" /></div><h3 className="text-lg font-bold text-white leading-tight">{course.title}</h3></div>
              <p className="text-[#888888] text-sm leading-relaxed flex-1">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-[#666666]"><span className="flex items-center gap-1"><Clock size={12} />{course.duration}</span><span className="flex items-center gap-1"><Users size={12} />{course.students}</span></div>
              <a href="#contato" className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${course.highlight ? "btn-gold" : "btn-outline-gold"}`}>Saber Mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></a>
            </div>
          );})}
        </div>
        <div className="text-center mt-12">
          <p className="text-[#888888] mb-4">Não sabe qual curso escolher?</p>
          <a href="#contato" className="btn-gold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 group">Falar com Especialista <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></a>
        </div>
      </div>
    </section>
  );
}