import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-brand-950 border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-sm text-brand-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.fullName}. Todos os direitos reservados.
          </p>
          <p>SIVISA {company.sivisa}</p>
        </div>
      </div>
    </footer>
  )
}
