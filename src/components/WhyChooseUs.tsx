import { Clock, Leaf, ShieldCheck, Users } from 'lucide-react'
import Reveal from './Reveal'
import { differentiators } from '../data/content'

const diffIcons = { ShieldCheck, Users, Leaf, Clock }

export default function WhyChooseUs() {
  return (
    <section id="diferenciais" className="relative bg-brand-50/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Por que Escolher Nossa Empresa?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => {
            const Icon = diffIcons[item.icon as keyof typeof diffIcons]
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-soft transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={20} />
                    </span>
                    <p className="font-semibold text-brand-950">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-900/60">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
