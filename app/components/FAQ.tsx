"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Preciso ter conhecimento técnico para começar?", a: "Não. Nossos cursos são estruturados para todos os níveis." },
  { q: "Os cursos têm certificado?", a: "Sim. Todos os cursos emitem certificado digital reconhecido, que você pode adicionar ao LinkedIn." },
  { q: "Por quanto tempo tenho acesso ao conteúdo?", a: "O acesso é vitalício. Você compra uma vez e tem acesso para sempre, incluindo atualizações futuras." },
  { q: "Tem suporte se eu travar em alguma parte?", a: "Sim. Temos comunidade exclusiva no Discord, sessões ao vivo semanais e suporte por e-mail." },
  { q: "Os cursos são ao vivo ou gravados?", a: "O conteúdo principal é gravado para você assistir no seu ritmo. Complementamos com sessões ao vivo mensais." },
  { q: "Qual a diferença entre os cursos individuais e a Formação Completa?", a: "A Formação Completa inclui todos os cursos em uma trilha estruturada, com desconto significativo e mentoria." },
  { q: "Tem garantia?", a: "Sim. Garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">Dúvidas frequentes</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Respondendo suas<br /><span className="text-gold-gradient">principais dúvidas</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card-premium rounded-2xl overflow-hidden" style={open === i ? { borderColor: "rgba(201,168,76,0.4)" } : {}}>
              <button className="w-full flex items-center justify-between p-6 text-left gap-4" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-white font-semibold leading-snug">{faq.q}</span>
                <div className="w-7 h-7 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  {open === i ? <Minus size={14} className="text-[#C9A84C]" /> : <Plus size={14} className="text-[#C9A84C]" />}
                </div>
              </button>
              {open === i && <div className="px-6 pb-6"><p className="text-[#888888] leading-relaxed">{faq.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}