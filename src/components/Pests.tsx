import Reveal from './Reveal'
import { pests } from '../data/content'

const track = [...pests, ...pests]

function PestCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex w-32 flex-none flex-col items-center gap-3 px-4 py-2">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 text-4xl ring-1 ring-brand-100">
        {icon}
      </span>
      <span className="text-center text-sm font-medium leading-snug text-brand-900/80">{name}</span>
    </div>
  )
}

export default function Pests() {
  return (
    <section id="pragas" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Pragas urbanas
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Combatemos as principais pragas urbanas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-900/70">
            Identificamos a origem do problema e aplicamos o tratamento mais adequado para cada
            espécie.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="marquee-row mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee-left">
          {track.map((pest, i) => (
            <PestCard key={`${pest.name}-${i}`} name={pest.name} icon={pest.icon} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
