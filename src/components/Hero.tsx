import { motion } from 'framer-motion'
import { ArrowRight, Award, BadgeCheck, MessageCircle, Sparkles } from 'lucide-react'
import { company } from '../data/content'

const badges = [
  { icon: BadgeCheck, text: 'Produtos registrados no MS' },
  { icon: Award, text: 'Certificação SIVISA' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-brand-100 backdrop-blur"
          >
            <Sparkles size={14} className="text-accent-300" />
            Atendimento em {company.region}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Proteção definitiva contra{' '}
            <span className="bg-gradient-to-r from-accent-300 to-brand-300 bg-clip-text text-transparent">
              pragas urbanas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/90"
          >
            Somos especialistas em controle de pragas, com equipe qualificada e produtos
            registrados no MS. Criamos um ambiente mais seguro, limpo e ecológico para você,
            sua família e seus pets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-400 px-7 py-3.5 text-base font-semibold text-brand-950 shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Solicitar orçamento
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Fale conosco
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-brand-100/80">
                <Icon size={16} className="text-accent-300" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-10 backdrop-blur-sm">
            <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-brand-800/40">
              <img
                src="/coruja-ecoar-removebg-preview.png"
                alt="Coruja Ecoar Pragas"
                className="h-64 w-64 object-contain"
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <BadgeCheck size={18} />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-brand-950">Certificado incluso</p>
                <p className="text-xs text-brand-900/60">em todos os planos</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-6 bottom-16 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                <Award size={18} />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-brand-950">SIVISA</p>
                <p className="text-xs text-brand-900/60">{company.sivisa}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
