import clsx from 'clsx'

const links = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/61582899135478/', // TODO: paste your real FB page link
  },
  {
    label: 'Google Business',
    href: 'https://www.google.com/search?ibp=gwp;0,7&q=Packer%E2%80%99s+Exterior+Washing+Services&ludocid=3121780479986020788&lsig=AB86z5XyP82MSuPQODzsbipoMPhE#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D', // TODO: paste your real Google Business / Maps link
  },
]

export function SocialMedia({ className }) {
  return (
    <div className={clsx('flex flex-wrap gap-3', className)}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}