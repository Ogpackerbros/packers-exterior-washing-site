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
  title: 'Roof Cleaning Williamsport PA | Soft Wash Roof Cleaning',
  description:
    'Professional roof cleaning in Williamsport, PA. Safe soft wash roof cleaning that removes black streaks, algae, and moss. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Roof Cleaning Services"
        title="Safe, long-lasting roof cleaning in Williamsport"
        invert
      >
        <p>
          We specialize in low-pressure roof cleaning that removes black streaks,
          algae, and moss without damaging shingles or voiding warranties.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Roof Cleaning" invert>
            We use manufacturer-approved soft washing methods to safely kill
            algae at the root instead of blasting it off with high pressure.
          </GridListItem>

          <GridListItem title="Asphalt & Architectural Shingles" invert>
            Perfect for common Williamsport homes. No granule loss, no damage,
            and dramatically improved curb appeal.
          </GridListItem>

          <GridListItem title="Metal & Specialty Roofs" invert>
            Custom cleaning methods for metal, low-slope, and specialty roofing
            materials.
          </GridListItem>

          <GridListItem title="Algae & Moss Treatment" invert>
            Black streaks aren’t dirt — they’re living algae. We treat the source
            for results that last far longer.
          </GridListItem>

          <GridListItem title="Gutter Line Restoration" invert>
            Brighten dark gutter stripes caused by roof runoff and organic
            staining.
          </GridListItem>

          <GridListItem title="Residential & Commercial" invert>
            From single-family homes to apartment buildings and commercial
            properties across Williamsport.
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
          Built for Williamsport roofs
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Williamsport’s humidity, tree cover, and seasonal weather make roof
            algae a constant problem. If you see black streaks, green patches,
            or moss buildup, it’s not just cosmetic — it can shorten the life of
            your roof.
          </p>

          <p>
            We’re based right here in Central PA, which means we understand the
            exact conditions your roof is dealing with. Our roof cleaning
            process is designed specifically for this region.
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
        title="Roof cleaning throughout the Williamsport area"
      >
        <p>
          In addition to Williamsport, we provide roof cleaning services
          throughout the surrounding communities.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="South Williamsport">
            Just across the river. Same trusted roof cleaning process.
          </GridListItem>
          <GridListItem title="Montoursville">
            High tree coverage makes roof algae common — we handle it safely.
          </GridListItem>
          <GridListItem title="Jersey Shore">
            Quick access via Route 220. Residential and commercial roofs.
          </GridListItem>
          <GridListItem title="Muncy">
            Serving homes throughout Muncy and Muncy Creek Township.
          </GridListItem>
          <GridListItem title="Hughesville">
            Regularly serviced as part of our local routes.
          </GridListItem>
          <GridListItem title="And Beyond">
            Central PA roof cleaning — just ask if you’re nearby.
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
            Get a roof cleaning quote in Williamsport
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Protect your roof and restore its appearance. Fast quotes, honest
            pricing, and professional results.
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

export default function RoofCleaningWilliamsportPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/roof-cleaning"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Roof Cleaning Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Williamsport, PA"
        title="Professional roof cleaning in Williamsport, PA"
      >
        <p>
          Safe soft wash roof cleaning that removes black streaks, algae, and
          moss without damaging shingles. Trusted local service.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Local" label="Central PA based" />
          <StatListItem value="Soft Wash" label="No high pressure" />
          <StatListItem value="Same day" label="Quotes available" />
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