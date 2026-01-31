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
  title: 'House Washing Lewisburg PA | Soft Wash Siding Cleaning',
  description:
    'Professional house washing in Lewisburg, PA. Soft wash siding cleaning removes algae and mildew without high pressure or damage.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="House Washing Services"
        title="House washing done right in Lewisburg"
        invert
      >
        <p>
          Lewisburg homes often deal with algae buildup from shade, humidity,
          and mature landscaping.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Siding Cleaning" invert>
            Gentle, low-pressure cleaning that protects siding and paint.
          </GridListItem>

          <GridListItem title="Historic & Modern Homes" invert>
            Careful methods for both older Lewisburg homes and newer construction.
          </GridListItem>

          <GridListItem title="Vinyl, Brick & Stucco" invert>
            Customized cleaning for each surface type.
          </GridListItem>

          <GridListItem title="Algae & Mildew Removal" invert>
            Eliminates green and black staining common in shaded areas.
          </GridListItem>

          <GridListItem title="Trim, Soffits & Fascia" invert>
            Complete exterior cleaning for a uniform, bright appearance.
          </GridListItem>

          <GridListItem title="Seasonal Maintenance" invert>
            Ideal before summer gatherings or after winter grime.
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
          Built for Lewisburg homes
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Tree-lined streets and shaded properties make Lewisburg homes prone
            to algae and mildew growth.
          </p>

          <p>
            Our soft wash process safely cleans without forcing water behind siding
            or damaging delicate surfaces.
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
            Get a house washing quote in Lewisburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Protect your home and restore curb appeal with soft washing.
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

export default function HouseWashingLewisburgPage() {
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
        eyebrow="Lewisburg, PA"
        title="Professional house washing in Lewisburg"
      >
        <p>
          Safe soft wash house washing that removes algae and mildew without
          damaging siding or paint.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Soft Wash" label="Safe for siding" />
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