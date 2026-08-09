import { Clock, Leaf, ShieldCheck, Users } from 'lucide-react'
import Reveal from './Reveal'
import { company, differentiators, values } from '../data/content'

const diffIcons = { ShieldCheck, Users, Leaf, Clock }

export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
              Quem somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Excelência e cuidado em cada visita
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-900/70">
              A {company.fullName} atua com profissionais qualificados, equipamentos
              modernos e produtos registrados no Ministério da Saúde. Nosso objetivo é criar um
              ambiente mais seguro, limpo e ecológico para você, sua família e seus pets, com
              atendimento em Campinas e região.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {differentiators.map((item) => {
                const Icon = diffIcons[item.icon as keyof typeof diffIcons]
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-950">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-900/60">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <div className="grid content-start gap-5">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-7 transition-colors hover:border-brand-200 hover:bg-brand-50">
                  <h3 className="font-display text-xl font-bold text-brand-950">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-brand-900/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
