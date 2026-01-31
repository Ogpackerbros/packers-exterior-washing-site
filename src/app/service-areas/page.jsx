import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Service Areas | Pressure Washing in Central PA',
  description:
    'Packers Exterior Washing provides professional pressure washing, house washing, and roof cleaning throughout Central Pennsylvania. See all the areas we serve.',
}

const locations = [
  {
    region: 'Lycoming County',
    towns: [
      { name: 'Williamsport', href: '/service-areas/williamsport' },
      { name: 'Montoursville', href: '/service-areas/montoursville' },
      { name: 'Jersey Shore', href: '/service-areas/jersey-shore' },
      { name: 'South Williamsport', href: '/service-areas/south-williamsport' },
      { name: 'Muncy', href: '/service-areas/muncy' },
      { name: 'Hughesville', href: '/service-areas/hughesville' },
    ],
  },
  {
    region: 'Clinton County',
    towns: [
      { name: 'Lock Haven', href: '/service-areas/lock-haven' },
      { name: 'Mill Hall', href: '/service-areas/mill-hall' },
    ],
  },
  {
    region: 'Union & Snyder Counties',
    towns: [
      { name: 'Lewisburg', href: '/service-areas/lewisburg' },
      { name: 'Selinsgrove', href: '/service-areas/selinsgrove' },
    ],
  },
  {
    region: 'Northumberland County',
    towns: [
      { name: 'Sunbury', href: '/service-areas/sunbury' },
      { name: 'Danville', href: '/service-areas/danville' },
    ],
  },
  {
    region: 'Columbia County',
    towns: [
      { name: 'Bloomsburg', href: '/service-areas/bloomsburg' },
      { name: 'Berwick', href: '/service-areas/berwick' },
    ],
  },
  {
    region: 'Centre County',
    towns: [
      { name: 'State College', href: '/service-areas/state-college' },
    ],
  },
]

function LocationCard({ region, towns }) {
  return (
    <FadeIn className="rounded-4xl border border-neutral-200 bg-white p-8">
      <h2 className="font-display text-xl font-semibold text-neutral-950">
        {region}
      </h2>
      <ul className="mt-4 space-y-2">
        {towns.map((town) => (
          <li key={town.name}>
            <Link
              href={town.href}
              className="group inline-flex items-center text-base text-neutral-600 transition hover:text-neutral-950"
            >
              {town.name}
              <span className="ml-2 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </FadeIn>
  )
}

export default function ServiceAreasPage() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Service Areas"
        title="Professional exterior cleaning throughout Central PA."
      >
        <p>
          Based in Jersey Shore and Williamsport, we provide house washing, roof
          cleaning, concrete cleaning, and more to communities across Central
          Pennsylvania. Don't see your town listed?{' '}
          <Link href="/contact" className="font-semibold text-neutral-950 underline">
            Contact us
          </Link>{' '}
          — we're happy to travel for the right job.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard
              key={location.region}
              region={location.region}
              towns={location.towns}
            />
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Don't see your area?
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              We travel throughout Central PA and beyond for the right projects.
              Give us a call and let's talk about your property.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="tel:+15703377440" invert>
                Call (570) 337-7440
              </Button>
              <Button href="/contact" invert>
                Request a Quote
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
