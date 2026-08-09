import Reveal from './Reveal'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certificacoes" className="relative bg-brand-50/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Credibilidade
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Certificações e registros
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-900/70">
            Atuamos em conformidade com os órgãos de vigilância sanitária e ambiental, com
            certificado emitido a cada serviço realizado.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center justify-center gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              title={cert.name}
              className="flex h-30 w-30 items-center justify-center rounded-2xl border border-brand-100 bg-white p-3 shadow-soft transition-transform hover:-translate-y-1 sm:h-28 sm:w-28"
            >
              <img
                src={cert.image}
                alt={cert.name}
                width={112}
                height={112}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
