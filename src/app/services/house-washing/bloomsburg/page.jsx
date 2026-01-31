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
  title: 'House Washing Bloomsburg PA | Soft Wash Siding Cleaning',
  description:
    'Professional house washing in Bloomsburg, PA. Soft wash siding cleaning for residential and rental properties.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="House Washing Services"
        title="House washing for Bloomsburg homes and rentals"
        invert
      >
        <p>
          Bloomsburg properties — especially rentals — collect grime and algae fast
          due to shade, traffic, and seasonal moisture.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Siding Cleaning" invert>
            Low-pressure cleaning that protects siding, paint, and trim.
          </GridListItem>

          <GridListItem title="Student Rentals & Homes" invert>
            Ideal for landlords, homeowners, and property managers.
          </GridListItem>

          <GridListItem title="Vinyl, Brick & Stucco" invert>
            Each surface cleaned with the correct solution and method.
          </GridListItem>

          <GridListItem title="Mold & Mildew Removal" invert>
            Eliminates green and black staining caused by moisture and shade.
          </GridListItem>

          <GridListItem title="Soffits, Fascia & Trim" invert>
            Brightens the full exterior for a clean, uniform look.
          </GridListItem>

          <GridListItem title="Move-In / Move-Out Cleaning" invert>
            Popular for rentals before new tenants or inspections.
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
          Designed for Bloomsburg properties
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Dense housing, shaded streets, and seasonal turnover make exterior
            maintenance especially important in Bloomsburg.
          </p>

          <p>
            Our soft wash process delivers consistent results without damaging
            siding or causing streaks.
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
            Get a house washing quote in Bloomsburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Clean siding, better curb appeal, and zero damage.
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

export default function HouseWashingBloomsburgPage() {
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
        eyebrow="Bloomsburg, PA"
        title="Professional house washing in Bloomsburg"
      >
        <p>
          Safe soft wash house washing for homes and rental properties throughout
          Bloomsburg.
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