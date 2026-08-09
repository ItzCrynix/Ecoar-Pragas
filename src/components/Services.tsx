import { Building2, Home, Warehouse } from 'lucide-react'
import Reveal from './Reveal'
import { iconMap } from '../lib/icon-map'
import { sectors, services } from '../data/content'

const sectorIcons = { Home, Building2, Warehouse }

export default function Services() {
  return (
    <section id="servicos" className="relative bg-brand-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-300">
            Nossos serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluções completas de controle de pragas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-100/70">
            Tratamentos personalizados para cada tipo de ambiente, com segurança e eficácia
            comprovadas.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 transition-colors group-hover:bg-accent-400 group-hover:text-brand-950">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-brand-100/60">{service.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-10">
          <span className="text-sm font-medium text-brand-100/60">Atendemos:</span>
          {sectors.map((sector) => {
            const Icon = sectorIcons[sector.icon as keyof typeof sectorIcons]
            return (
              <span
                key={sector.title}
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-brand-100"
              >
                <Icon size={15} />
                {sector.title}
              </span>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
