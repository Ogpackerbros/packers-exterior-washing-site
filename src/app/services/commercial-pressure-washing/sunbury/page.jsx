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
  title: 'Commercial Pressure Washing Sunbury PA | Business Exterior Cleaning',
  description:
    'Professional commercial pressure washing in Sunbury, PA. Storefronts, sidewalks, offices, and industrial properties cleaned safely. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Commercial Pressure Washing"
        title="Exterior cleaning for Sunbury businesses and facilities"
        invert
      >
        <p>
          We help Sunbury businesses, property managers, and facilities maintain
          clean, safe, and professional exterior spaces year-round.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Storefront & Sidewalk Cleaning" invert>
            Remove algae, staining, and grime from walkways and entrances to improve
            safety and appearance.
          </GridListItem>

          <GridListItem title="Industrial & Commercial Facilities" invert>
            Exterior cleaning for warehouses, service buildings, and high-use
            concrete areas.
          </GridListItem>

          <GridListItem title="Apartments & Multi-Unit Properties" invert>
            Common areas, sidewalks, and stairwells cleaned to improve curb appeal
            and tenant experience.
          </GridListItem>

          <GridListItem title="Concrete & Hardscape Cleaning" invert>
            Even, consistent cleaning for steps, pads, and business frontage.
          </GridListItem>

          <GridListItem title="Dumpster & Service Areas" invert>
            Sanitary cleaning for grease-prone and high-odor areas.
          </GridListItem>

          <GridListItem title="Flexible Scheduling" invert>
            Reliable scheduling options to work around staff, tenants, and operations.
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
          Built for Sunbury’s environment
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Sunbury’s river proximity, humidity, and shaded commercial corridors lead
            to fast organic buildup on concrete and exterior surfaces.
          </p>

          <p>
            As a Central PA company, we know exactly what causes the staining here and
            how to clean it safely and effectively without disrupting operations.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function Areas() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Nearby Service Areas"
        title="Commercial pressure washing around Sunbury"
      >
        <p>
          We service commercial properties throughout Sunbury and surrounding areas
          in Northumberland County.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Shamokin">
            Retail and industrial exterior cleaning.
          </GridListItem>
          <GridListItem title="Northumberland">
            Storefronts, sidewalks, and professional buildings.
          </GridListItem>
          <GridListItem title="Mount Carmel">
            Apartment properties and commercial walkways.
          </GridListItem>
          <GridListItem title="Herndon">
            Small businesses and roadside properties.
          </GridListItem>
          <GridListItem title="Selinsgrove Area">
            Retail corridors and high-traffic concrete.
          </GridListItem>
          <GridListItem title="Central PA">
            Ask us—we likely already service your area.
          </GridListItem>
        </GridList>
      </Container>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get a commercial cleaning quote in Sunbury
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Clean concrete, safer entrances, and a property you’re proud of.
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

export default function CommercialSunburyPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/commercial-pressure-washing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Commercial Pressure Washing
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Sunbury, PA"
        title="Commercial pressure washing in Sunbury, PA"
      >
        <p>
          Reliable exterior cleaning for businesses, facilities, and property managers
          throughout the Sunbury area.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Reliable" label="Scheduling" />
          <StatListItem value="Cleaner" label="Entrances & walkways" />
          <StatListItem value="Local" label="Central PA based" />
        </StatList>
      </Container>

      <Services />
      <WhyLocal />
      <Areas />
      <CTA />

      <ContactSection />
    </RootLayout>
  )
}