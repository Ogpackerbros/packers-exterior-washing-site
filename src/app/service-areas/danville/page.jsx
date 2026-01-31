import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Pressure Washing Danville PA | House Washing & Roof Cleaning',
  description:
    'Professional pressure washing services in Danville, PA. House washing, roof cleaning, concrete cleaning, and more. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Services"
        title="Exterior cleaning for Danville homes and businesses"
        invert
      >
        <p>
          From residential neighborhoods to medical offices and rentals,
          we provide professional exterior cleaning throughout Danville.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="House Washing" invert>
            Safe soft washing for siding, brick, and delicate trim.
          </GridListItem>
          <GridListItem title="Roof Cleaning" invert>
            Algae removal without high pressure or shingle damage.
          </GridListItem>
          <GridListItem title="Concrete Cleaning" invert>
            Sidewalks, driveways, and walkways cleaned evenly.
          </GridListItem>
          <GridListItem title="Deck & Fence Cleaning" invert>
            Restore outdoor surfaces safely and effectively.
          </GridListItem>
          <GridListItem title="Gutter Cleaning" invert>
            Debris removal and exterior brightening services.
          </GridListItem>
          <GridListItem title="Commercial Services" invert>
            Medical offices, rentals, and professional buildings.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function WhyUs() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Trusted service for Danville properties
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Danville’s mix of residential neighborhoods and professional
            properties requires attention to detail and scheduling flexibility.
          </p>
          <p>
            We regularly service the Danville area, making it easy to schedule
            cleanings alongside nearby jobs.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function Areas() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Coverage Area"
        title="Danville and nearby communities"
      >
        <p>
          We service Danville and surrounding Montour County areas.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Danville Borough">
            Residential neighborhoods and rentals.
          </GridListItem>
          <GridListItem title="Mahoning Township">
            Suburban and rural properties.
          </GridListItem>
          <GridListItem title="Riverside">
            Homes and river-adjacent properties.
          </GridListItem>
          <GridListItem title="Bloomsburg">
            Nearby university town.
          </GridListItem>
          <GridListItem title="Washingtonville">
            Easy access via Route 54.
          </GridListItem>
          <GridListItem title="Elysburg">
            Residential and country properties.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ready to schedule service in Danville?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Call or text for fast scheduling and clear pricing.
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

export default function DanvillePage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link href="/service-areas" className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
            ← All Service Areas
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Danville, PA"
        title="Professional pressure washing in Danville."
      >
        <p>
          Exterior cleaning services for Danville homes and businesses.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="50 min" label="From Williamsport" />
          <StatListItem value="Same day" label="Quotes available" />
          <StatListItem value="Commercial" label="Capable" />
        </StatList>
      </Container>

      <Services />
      <WhyUs />
      <Areas />
      <CTA />
      <ContactSection />
    </RootLayout>
  )
}