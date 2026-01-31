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
  title: 'House Washing Sunbury PA | Soft Wash Siding Cleaning',
  description:
    'Professional house washing in Sunbury, PA. Soft wash siding cleaning for homes affected by river moisture and algae growth.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="House Washing Services"
        title="Soft wash house washing for Sunbury homes"
        invert
      >
        <p>
          Sunbury’s river proximity and shaded neighborhoods make algae and mildew
          a common exterior issue.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Low-Pressure Soft Washing" invert>
            Safely removes buildup without damaging siding or trim.
          </GridListItem>

          <GridListItem title="Vinyl, Brick & Stucco" invert>
            Each surface cleaned using the proper method and solution.
          </GridListItem>

          <GridListItem title="River Moisture Protection" invert>
            Designed to combat algae growth caused by humidity and shade.
          </GridListItem>

          <GridListItem title="Mold & Mildew Removal" invert>
            Eliminates green and black staining from siding and soffits.
          </GridListItem>

          <GridListItem title="Full Exterior Cleaning" invert>
            Includes siding, soffits, fascia, and trim.
          </GridListItem>

          <GridListItem title="Seasonal Refresh" invert>
            Ideal before summer events or after winter buildup.
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
            Homes near the river experience faster algae growth due to moisture
            and limited airflow.
          </p>

          <p>
            Our soft wash process kills organic growth at the source for longer-
            lasting results.
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
            Get a house washing quote in Sunbury
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Safe cleaning that restores curb appeal without damage.
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

export default function HouseWashingSunburyPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/house-washing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            ← House Washing Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Sunbury, PA"
        title="Professional house washing in Sunbury"
      >
        <p>
          Soft wash house washing designed for river-adjacent homes and shaded
          neighborhoods.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Soft Wash" label="No damage" />
          <StatListItem value="2–3 yrs" label="Results last" />
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