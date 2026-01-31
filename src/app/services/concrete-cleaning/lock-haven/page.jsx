import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Concrete Cleaning Lock Haven PA | Driveway & Sidewalk Washing',
  description:
    'Professional concrete cleaning in Lock Haven, PA. Driveways, sidewalks, patios, and walkways cleaned evenly with surface cleaners.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Concrete Cleaning Services"
        title="Concrete cleaning for Lock Haven homes"
        invert
      >
        <p>
          Lock Haven’s shade, moisture, and foot traffic cause algae and staining
          to build up quickly on concrete surfaces.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Driveways" invert>
            Removes deep grime, oil stains, and traffic marks.
          </GridListItem>

          <GridListItem title="Sidewalks & Steps" invert>
            Restores safe walking surfaces around your property.
          </GridListItem>

          <GridListItem title="Patios & Outdoor Areas" invert>
            Cleans algae and discoloration from gathering spaces.
          </GridListItem>

          <GridListItem title="Surface Cleaner Equipment" invert>
            Delivers uniform pressure across every square foot.
          </GridListItem>

          <GridListItem title="Pre-Treatment for Stains" invert>
            Targets problem areas before full cleaning.
          </GridListItem>

          <GridListItem title="Residential & Small Commercial" invert>
            Homes, rentals, and local businesses throughout Lock Haven.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function WhyLocal() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Designed for Lock Haven conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            River moisture, shade, and seasonal weather cause concrete to stain
            faster in Lock Haven than in drier areas.
          </p>

          <p>
            Our surface cleaning process removes buildup evenly without damaging
            or etching the concrete.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get a concrete cleaning quote in Lock Haven
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Safe, even concrete cleaning for driveways and walkways.
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
  )
}

export default function ConcreteCleaningLockHavenPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/concrete-cleaning"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            ← Concrete Cleaning Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Lock Haven, PA"
        title="Professional concrete cleaning in Lock Haven"
      >
        <p>
          Even, streak-free concrete cleaning using commercial surface cleaners.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="No" label="Striping" />
          <StatListItem value="Even" label="Coverage" />
          <StatListItem value="Same day" label="Quotes available" />
        </StatList>
      </Container>

      <Services />
      <WhyLocal />
      <CTA />

      <ContactSection />
    </RootLayout>
  )
}