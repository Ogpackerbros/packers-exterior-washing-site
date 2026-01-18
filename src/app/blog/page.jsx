import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

import houseAfter from '@/images/gallery/house-wash-after.jpeg'
import concreteAfter from '@/images/gallery/concrete-walkway-after.jpeg'

export const metadata = {
  title: 'Home',
  description:
    'Packers Exterior Washing Services — house washing, roof cleaning, and concrete cleaning in Williamsport and Central PA.',
}

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <p className="text-sm font-semibold tracking-tight text-neutral-600">
            Williamsport, PA • House Washing • Roof Cleaning • Concrete Cleaning
          </p>

          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
            Make your home look new again.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            Packers Exterior Washing delivers safe, professional exterior cleaning
            in Central PA — siding, roofs, concrete, gutters, and more. No gimmicks.
            Just clean.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Get a quote</Button>
            <Button href="/work" variant="secondary">
              See before &amp; after
            </Button>
          </div>

          <div className="mt-10 text-sm text-neutral-600">
            Serving Williamsport, Jersey Shore, Montoursville, Loyalsock, and nearby areas.
          </div>
        </FadeIn>

        <FadeIn className="mt-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-4xl bg-neutral-100">
              <Image
                src={houseAfter}
                alt="House wash after"
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="overflow-hidden rounded-4xl bg-neutral-100">
              <Image
                src={concreteAfter}
                alt="Concrete cleaning after"
                className="h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>
      </Container>

      <ServicesPreview />

      <ContactSection />
    </RootLayout>
  )
}

function ServicesPreview() {
  let services = [
    {
      title: 'House Washing (Soft Wash)',
      description:
        'Safely removes algae and grime from siding, soffits, and trim — without blasting your home.',
    },
    {
      title: 'Roof Cleaning',
      description:
        'Low-pressure treatment to remove black streaks and organic growth while protecting shingles.',
    },
    {
      title: 'Concrete & Flatwork',
      description:
        'Driveways, sidewalks, patios, steps — cleaned brighter and safer with proper surface cleaning.',
    },
    {
      title: 'Gutters, Fences, Decks',
      description:
        'Add-ons that make the whole property look fresh. We’ll tell you what’s worth doing.',
    },
  ]

  return (
    <Container className="mt-20 sm:mt-24 lg:mt-32">
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold text-neutral-950">
              Services
            </h2>
            <p className="mt-3 max-w-2xl text-base text-neutral-600">
              Fast quotes. Clean communication. Results you can actually see.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-neutral-950 hover:underline"
          >
            View all services →
          </Link>
        </div>
      </FadeIn>

      {/* Cleaner look: no stacked Borders, just subtle separators */}
      <FadeInStagger faster className="mt-10">
        <div className="grid gap-x-10 gap-y-10 pt-2 sm:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <div className="rounded-4xl border border-neutral-200 bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Container>
  )
}