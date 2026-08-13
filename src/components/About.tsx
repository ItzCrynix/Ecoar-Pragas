import Reveal from './Reveal'
import { values, valuesList } from '../data/content'

export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Quem somos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Excelência e Rigor Técnico em Controle de Vetores e Pragas Urbanas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-900/70">
            Nascemos com o propósito de elevar os padrões de biossegurança e higiene ambiental.
            Nosso trabalho é pautado pelo cumprimento rigoroso das normas regulamentares do
            setor, oferecendo soluções que integram eficiência técnica e preservação ecológica.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-brand-100 bg-brand-50/50 p-6 transition-colors hover:border-brand-200 hover:bg-brand-50">
                <h3 className="font-display text-lg font-bold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-brand-950 sm:text-left">
              Valores
            </h3>
            <div className="mt-6 flex flex-col divide-y divide-brand-200 sm:flex-row sm:divide-x sm:divide-y-0">
              {valuesList.map((item) => (
                <div
                  key={item.title}
                  className="flex-1 py-4 first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
                >
                  <p className="text-sm font-semibold text-brand-950">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-900/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
