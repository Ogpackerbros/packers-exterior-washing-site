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
  title: 'Commercial Pressure Washing Lock Haven PA | Business Exterior Cleaning',
  description:
    'Professional commercial pressure washing in Lock Haven, PA. Sidewalks, storefronts, offices, apartments, and industrial properties cleaned safely. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Commercial Pressure Washing"
        title="Commercial exterior cleaning for Lock Haven properties"
        invert
      >
        <p>
          We help businesses and property managers in Lock Haven keep entrances,
          sidewalks, and building exteriors clean, safe, and presentable year-round.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Storefront & Sidewalk Cleaning" invert>
            Remove grime, algae, and staining from storefront approaches and walkways—
            especially in shaded areas where buildup happens fast.
          </GridListItem>

          <GridListItem title="Industrial & Warehouse Areas" invert>
            We clean loading zones, concrete pads, and exterior surfaces for facilities
            that need heavy-duty results.
          </GridListItem>

          <GridListItem title="Apartment & Multi-Unit Properties" invert>
            Common areas like breezeways, sidewalks, stairwells, and entrances cleaned
            to improve curb appeal and reduce slip hazards.
          </GridListItem>

          <GridListItem title="Concrete & Hardscape Cleaning" invert>
            Walkways, steps, patios, and business frontage cleaned evenly with the right
            tools and technique.
          </GridListItem>

          <GridListItem title="Dumpster Pads & Service Corridors" invert>
            Sanitary cleaning for the areas customers don’t see—but inspectors do.
          </GridListItem>

          <GridListItem title="Reliable Scheduling" invert>
            We coordinate around your hours and access needs—ideal for tenants, customers,
            and operations.
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
          Built for Lock Haven conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lock Haven’s river valley moisture, shade, and seasonal weather create the
            perfect environment for algae and organic buildup—especially on concrete
            and north-facing storefront areas.
          </p>

          <p>
            We’re based in Central PA, so we’re not guessing. We know what causes the
            staining here, and we clean commercial properties in a way that’s effective,
            safe, and dependable.
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
        title="Commercial pressure washing around Lock Haven"
      >
        <p>
          We provide commercial exterior cleaning in Lock Haven and surrounding
          communities throughout the region.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Mill Hall">
            Storefronts, sidewalks, and multi-unit properties.
          </GridListItem>
          <GridListItem title="Jersey Shore">
            Retail and commercial buildings along major routes.
          </GridListItem>
          <GridListItem title="Avis">
            Small businesses and property managers needing clean, safe concrete.
          </GridListItem>
          <GridListItem title="Flemington">
            Commercial walkways and building exterior cleaning.
          </GridListItem>
          <GridListItem title="Williamsport Area">
            Routine routes and flexible scheduling options.
          </GridListItem>
          <GridListItem title="Central PA">
            If you’re nearby, we’ll tell you straight if we can service it.
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
            Get a commercial cleaning quote in Lock Haven
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Clean entrances, safer concrete, and a better-looking property—without disruption.
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

export default function CommercialLockHavenPage() {
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
        eyebrow="Lock Haven, PA"
        title="Commercial pressure washing in Lock Haven, PA"
      >
        <p>
          Exterior cleaning for businesses, facilities, and property managers—done
          safely, efficiently, and on a schedule that works.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Reliable" label="Scheduling" />
          <StatListItem value="Safer" label="Concrete walkways" />
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