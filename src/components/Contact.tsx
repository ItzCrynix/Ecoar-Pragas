import { type FormEvent, useState } from 'react'
import { Clock, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import Reveal from './Reveal'
import { company } from '../data/content'

const info = [
  { icon: MessageCircle, label: 'WhatsApp', value: company.whatsapp, href: company.whatsappHref },
  { icon: Mail, label: 'E-mail', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Área de atendimento', value: company.region },
  { icon: Clock, label: 'Agendamento', value: 'Horários flexíveis, sob consulta' },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = `Olá, meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`
    window.open(`${company.whatsappHref}?text=${encodeURIComponent(text)}`, '_blank', 'noreferrer')
  }

  return (
    <section id="contato" className="relative bg-brand-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Fale conosco
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vamos resolver o seu problema
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-100/70">
              Solicite um orçamento sem compromisso. Nossa equipe responde rapidamente pelo
              WhatsApp.
            </p>

            <div className="mt-10 space-y-5">
              {info.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-300">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-brand-100/50">
                        {item.label}
                      </p>
                      <p className="text-base font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block w-fit">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand-100/80">
                    Nome
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-100/30 outline-none focus:border-accent-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand-100/80">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(19) 90000-0000"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-100/30 outline-none focus:border-accent-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-100/80">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte um pouco sobre o que você precisa"
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-100/30 outline-none focus:border-accent-400"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-400 px-6 py-3.5 text-sm font-semibold text-brand-950 transition-transform hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
