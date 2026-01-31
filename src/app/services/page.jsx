import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Services',
  description:
    'House washing, roof cleaning, concrete cleaning, and more in Williamsport and Central PA.',
}

const services = [
  {
    title: 'House Washing',
    href: '/services/house-washing',
    description:
      'Safely remove algae, mold, and grime from siding using soft wash techniques. Safe for vinyl, stucco, brick, and more.',
  },
  {
    title: 'Roof Cleaning',
    href: '/services/roof-cleaning',
    description:
      'Low-pressure soft wash treatment to remove black streaks and algae while protecting your shingles.',
  },
  {
    title: 'Concrete Cleaning',
    href: '/services/concrete-cleaning',
    description:
      'Driveways, sidewalks, patios, and steps cleaned with professional surface equipment. No stripes, no missed spots.',
  },
  {
    title: 'Deck & Fence Cleaning',
    href: '/services/deck-fence-cleaning',
    description:
      'Restore wood and composite surfaces. Great before staining or just to make your outdoor space look new again.',
  },
  {
    title: 'Commercial Pressure Washing',
    href: '/services/commercial-pressure-washing',
    description:
      'Storefronts, offices, apartments, sidewalks, and parking areas. Flexible scheduling to fit your business.',
  },
]

function ServiceCard({ title, href, description }) {
  return (
    <Link href={href} className="group block">
      <div className="rounded-4xl border border-neutral-200 bg-white p-8 transition-colors group-hover:bg-neutral-50">
        <h3 className="font-display text-2xl font-semibold text-neutral-950 group-hover:text-neutral-700">
          {title}
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
        </h3>
        <p className="mt-3 text-base text-neutral-600">{description}</p>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Services" title="Exterior cleaning that actually lasts.">
        <p>
          We focus on safe, consistent results — not rushed work. Click any service
          to learn more, or{' '}
          <Link className="font-semibold text-neutral-950 underline" href="/contact">
            get a free quote
          </Link>
          .
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeInStagger faster className="grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <ServiceCard title={s.title} href={s.href} description={s.description} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
