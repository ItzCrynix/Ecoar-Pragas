import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: 'backOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-500/50" />
      <MessageCircle size={26} />
    </motion.a>
  )
}
