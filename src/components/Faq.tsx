import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'
import { faqs } from '../data/content'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Perguntas que recebemos com frequência
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-900/70">
            Não encontrou o que precisava? Fale com a gente pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50/40">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-brand-950">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-brand-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-brand-900/70">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
