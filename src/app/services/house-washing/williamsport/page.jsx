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
  title: 'House Washing Williamsport PA | Soft Wash Siding Cleaning',
  description:
    'Professional house washing in Williamsport, PA. Soft wash siding cleaning removes algae, mold, and mildew without damage. Local & reliable.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="House Washing Services"
        title="Safe, professional house washing in Williamsport"
        invert
      >
        <p>
          Williamsport homes deal with heavy shade, humidity, and seasonal buildup
          that cause algae and mildew to spread quickly.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Siding Cleaning" invert>
            Low-pressure cleaning that removes buildup without forcing water behind
            siding or trim.
          </GridListItem>

          <GridListItem title="Vinyl, Brick & Stucco" invert>
            Each surface cleaned with the correct solution to prevent damage.
          </GridListItem>

          <GridListItem title="Older & Newer Homes" invert>
            Ideal for historic neighborhoods and modern developments alike.
          </GridListItem>

          <GridListItem title="Mold & Mildew Removal" invert>
            Eliminates green and black staining caused by moisture and shade.
          </GridListItem>

          <GridListItem title="Soffits, Fascia & Trim" invert>
            Brightens the full exterior for a clean, uniform look.
          </GridListItem>

          <GridListItem title="Seasonal Maintenance" invert>
            Popular after winter grime or before listing your home for sale.
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
          Designed for Williamsport conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Tree coverage, river moisture, and shaded neighborhoods make exterior
            buildup unavoidable in Williamsport.
          </p>

          <p>
            Our soft wash process safely removes organic growth while protecting
            siding, paint, and landscaping.
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
            Get a house washing quote in Williamsport
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Restore curb appeal safely with professional soft washing.
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

export default function HouseWashingWilliamsportPage() {
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
        eyebrow="Williamsport, PA"
        title="Professional house washing in Williamsport"
      >
        <p>
          Safe soft wash house washing that removes algae and mildew without
          damaging siding or paint.
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