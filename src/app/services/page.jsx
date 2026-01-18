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
    title: 'House Washing (Soft Wash)',
    description:
      'Safely remove algae, mold, and grime without damaging siding. Great for vinyl, stucco, brick, and more.',
  },
  {
    title: 'Concrete & Flatwork Cleaning',
    description:
      'Driveways, sidewalks, patios, pool decks, and steps. Big visual results using proper surface cleaning.',
  },
  {
    title: 'Roof Cleaning',
    description:
      'Low-pressure roof treatment to remove black streaks and organic growth while protecting shingles.',
  },
  {
    title: 'Gutter Brightening',
    description:
      'Remove tiger stripes/oxidation staining when applicable (not every gutter can be restored perfectly — we’ll tell you upfront).',
  },
  {
    title: 'Decks & Fences',
    description:
      'Refresh wood and composite surfaces. Great before staining/sealing or just to make it look new again.',
  },
]

function ServiceCard({ title, description }) {
  return (
    <div className="rounded-4xl border border-neutral-200 bg-white p-8">
      <h3 className="font-display text-2xl font-semibold text-neutral-950">
        {title}
      </h3>
      <p className="mt-3 text-base text-neutral-600">{description}</p>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Services" title="Exterior cleaning that actually lasts.">
        <p>
          We focus on safe, consistent results — not rushed work.
          Want a fast quote?{' '}
          <Link className="font-semibold text-neutral-950 underline" href="/contact">
            Get in touch
          </Link>
          .
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeInStagger faster className="grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <ServiceCard title={s.title} description={s.description} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}