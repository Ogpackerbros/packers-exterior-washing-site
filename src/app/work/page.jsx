import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

// Gallery images (these filenames exist in src/images/gallery/)
import houseBefore from '@/images/gallery/house-wash-before.jpeg'
import houseAfter from '@/images/gallery/house-wash-after.jpeg'

import concreteBefore from '@/images/gallery/concrete-walkway-before.jpeg'
import concreteAfter from '@/images/gallery/concrete-walkway-after.jpeg'

import sidewalkBefore from '@/images/gallery/sidewalk-garage-before.jpeg'
import sidewalkAfter from '@/images/gallery/sidewalk-garage-after.jpeg'

import sidingBefore from '@/images/gallery/siding-before.jpeg'
import sidingAfter from '@/images/gallery/siding-after.jpeg'

export const metadata = {
  title: 'Our Work',
  description:
    'Before & after results from Packers Exterior Washing Services in Williamsport, PA.',
}

const projects = [
  {
    title: 'House Wash',
    before: houseBefore,
    after: houseAfter,
  },
  {
    title: 'Concrete Walkway',
    before: concreteBefore,
    after: concreteAfter,
  },
  {
    title: 'Sidewalk / Garage Pad',
    before: sidewalkBefore,
    after: sidewalkAfter,
  },
  {
    title: 'Siding Cleanup',
    before: sidingBefore,
    after: sidingAfter,
  },
]

function BeforeAfterCard({ title, before, after }) {
  return (
    <FadeIn>
      <Border className="pt-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-neutral-950">Before</p>
            <div className="mt-3 overflow-hidden rounded-4xl bg-neutral-100">
              <Image src={before} alt={`${title} before`} className="h-auto w-full" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-950">After</p>
            <div className="mt-3 overflow-hidden rounded-4xl bg-neutral-100">
              <Image src={after} alt={`${title} after`} className="h-auto w-full" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-2xl font-semibold text-neutral-950">
            {title}
          </h3>
          <p className="mt-2 text-base text-neutral-600">
            Professional exterior cleaning in Central PA — done safely and consistently, with results you can actually see.
          </p>
        </div>
      </Border>
    </FadeIn>
  )
}

export default function WorkPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our work" title="Real before & after results.">
        <p>
          A few recent jobs from Packers Exterior Washing Services. If you want results like this, hit us up for a quick quote.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20 lg:mt-24">
        <FadeInStagger faster className="space-y-14">
          {projects.map((p) => (
            <BeforeAfterCard key={p.title} title={p.title} before={p.before} after={p.after} />
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
