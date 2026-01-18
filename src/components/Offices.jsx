import clsx from 'clsx'

export function Offices({ className }) {
  return (
    <div className={clsx('text-sm text-white/80', className)}>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-sm font-semibold text-white">
            Service Area
          </h3>
          <p className="mt-3">Williamsport, PA + surrounding Central Pennsylvania</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Hours</h3>
          <p className="mt-3">Mon–Sat 8am–6pm</p>
        </div>

        <div className="sm:col-span-2">
          <h3 className="font-display text-sm font-semibold text-white">
            Contact
          </h3>
          <div className="mt-3 space-y-2">
            <a
              className="block underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
              href="mailto:info@packerwashing.com"
            >
              info@packerwashing.com
            </a>
            <a
              className="block underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
              href="tel:+15703377440"
            >
              (570) 337-7440
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}