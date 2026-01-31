import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Roof Cleaning in Williamsport PA | Soft Wash Roof Treatment',
  description:
    'Professional roof cleaning in Williamsport and Central PA. Safe low-pressure soft wash removes black streaks, algae, and moss without damaging shingles.',
}

function ProblemSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          What causes those black streaks?
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            The dark streaks running down your roof aren't just dirt — they're a type
            of algae called <strong className="font-semibold text-neutral-950">Gloeocapsa magma</strong> that
            feeds on the limestone in asphalt shingles.
          </p>
          <p>
            Left untreated, this algae spreads across your entire roof, holds moisture
            against the shingles, and accelerates wear. It also makes your home look
            neglected, which can hurt curb appeal and property value.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhySection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="The Right Method"
        title="Why soft washing is the only safe way"
        invert
      >
        <p>
          Pressure washing a roof blasts off granules, damages shingles, and voids
          most manufacturer warranties. We use a better approach.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Low Pressure" invert>
            Our soft wash uses pressure similar to a garden hose — about 60-100 PSI
            compared to 2,000+ PSI from a pressure washer. Your shingles stay intact.
          </GridListItem>
          <GridListItem title="Kills the Source" invert>
            We don't just remove algae — our treatment kills it at the root. That's
            why results last 2-5 years instead of coming back in months.
          </GridListItem>
          <GridListItem title="Warranty Safe" invert>
            Soft washing is the ARMA (Asphalt Roofing Manufacturers Association)
            recommended cleaning method. It won't void your roof warranty.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function WhatWeClean() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Roof types we treat
        </h2>
      </FadeIn>
      <List className="mt-10">
        <ListItem title="Asphalt Shingles">
          Standard three-tab and architectural shingles — the most common roofing
          in Central PA. We remove black streaks without damaging granules.
        </ListItem>
        <ListItem title="Metal Roofs">
          Standing seam and corrugated metal roofs can develop algae and oxidation.
          We restore the finish without scratching or discoloration.
        </ListItem>
        <ListItem title="Cedar Shakes">
          Wood roofs require special care. We use wood-safe solutions and low
          pressure to remove moss and algae while preserving the cedar.
        </ListItem>
        <ListItem title="Tile & Slate">
          For specialty roofing materials, we adjust our approach to clean
          effectively without risking damage to brittle or fragile surfaces.
        </ListItem>
      </List>
    </Container>
  )
}

function Process() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="What to expect"
        title="Our roof cleaning process"
      >
        <p>
          Safe, thorough, and designed to protect your investment while delivering
          results you'll notice from the street.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Pre-soak Protection">
            All landscaping, plants, and sensitive areas get thoroughly pre-soaked
            before we start. We protect what's below while we clean above.
          </GridListItem>
          <GridListItem title="Solution Application">
            Our roof cleaning solution is applied at low pressure across the entire
            roof surface, ensuring complete coverage.
          </GridListItem>
          <GridListItem title="Dwell Time">
            The solution needs time to work. We let it dwell to break down and kill
            algae, moss, and organic growth at the root.
          </GridListItem>
          <GridListItem title="Natural Rinse">
            For most roofs, rain provides a natural rinse over the following days.
            For steeper roofs or heavy buildup, we may do a light rinse.
          </GridListItem>
          <GridListItem title="Gutter Rinse">
            Gutters, fascia, and soffits get cleaned as overspray naturally treats
            these areas. We rinse everything thoroughly.
          </GridListItem>
          <GridListItem title="Final Check">
            We inspect the entire roof and surrounding areas before we leave,
            ensuring complete coverage and no missed spots.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Results() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          How long do results last?
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Most roofs stay clean for <strong className="font-semibold text-neutral-950">2-5 years</strong> after
            treatment, depending on several factors:
          </p>
        </div>
      </FadeIn>
      <FadeIn className="mt-8">
        <TagList>
          <TagListItem>Tree coverage</TagListItem>
          <TagListItem>Shade exposure</TagListItem>
          <TagListItem>Humidity levels</TagListItem>
          <TagListItem>Roof pitch</TagListItem>
          <TagListItem>North vs. south facing</TagListItem>
        </TagList>
      </FadeIn>
      <FadeIn>
        <p className="mt-8 text-base text-neutral-600">
          North-facing sections and heavily shaded areas may need treatment sooner.
          We'll give you an honest assessment upfront about what to expect for your
          specific roof.
        </p>
      </FadeIn>
    </Container>
  )
}

function ServiceArea() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Service area
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          We provide roof cleaning services throughout Central Pennsylvania, including
          Williamsport, Montoursville, Jersey Shore, South Williamsport, Muncy,
          Hughesville, Lock Haven, and surrounding communities.
        </p>
      </FadeIn>
      <FadeIn className="mt-10">
        <TagList>
          <TagListItem>Williamsport</TagListItem>
          <TagListItem>Montoursville</TagListItem>
          <TagListItem>Jersey Shore</TagListItem>
          <TagListItem>South Williamsport</TagListItem>
          <TagListItem>Muncy</TagListItem>
          <TagListItem>Hughesville</TagListItem>
          <TagListItem>Lock Haven</TagListItem>
          <TagListItem>Mill Hall</TagListItem>
        </TagList>
      </FadeIn>
    </Container>
  )
}

/** ✅ ONLY ADDITION: clickable example link */
function RoofCleaningByLocation() {
  const locations = [
    {
      name: 'Williamsport',
      href: '/services/roof-cleaning/williamsport',
      description: 'Local roof cleaning tailored to Williamsport homes.',
    },
    {
      name: 'State College',
      href: '/services/roof-cleaning/state-college',
      description: 'Roof cleaning for State College neighborhoods and rentals.',
    },
    {
      name: 'Lewisburg',
      href: '/services/roof-cleaning/lewisburg',
      description: 'Safe soft wash roof cleaning in Lewisburg.',
    },
    {
      name: 'Lock Haven',
      href: '/services/roof-cleaning/lock-haven',
      description: 'Protect and restore roofs throughout Lock Haven.',
    },
    {
      name: 'Bloomsburg',
      href: '/services/roof-cleaning/bloomsburg',
      description: 'Professional roof cleaning for Bloomsburg properties.',
    },
    {
      name: 'Sunbury',
      href: '/services/roof-cleaning/sunbury',
      description: 'Long-lasting roof cleaning in the Sunbury area.',
    },
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Roof Cleaning by Location"
        title="Localized roof cleaning services"
      >
        <p>
          Select your city below to view roof cleaning details specific to your
          area, climate, and roofing conditions.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          {locations.map((location) => (
            <GridListItem key={location.name} title={location.name}>
              <p className="text-neutral-600">
                {location.description}
              </p>
              <Link
                href={location.href}
                className="mt-4 inline-block font-semibold text-neutral-950 underline transition hover:text-neutral-700"
              >
                View roof cleaning in {location.name} →
              </Link>
            </GridListItem>
          ))}
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
            Ready to get rid of those black streaks?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Text or call for the fastest quote. Include your address and a photo
            of your roof if you can.
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

export default function RoofCleaningPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Back to Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Roof Cleaning"
        title="Remove black streaks and protect your shingles."
      >
        <p>
          Those dark streaks aren't just ugly — they're algae eating away at your roof.
          Our soft wash treatment kills it safely without high pressure or damage.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="2-5 yr" label="Results typically last" />
          <StatListItem value="0" label="Shingle damage" />
          <StatListItem value="100%" label="Warranty safe" />
        </StatList>
      </Container>

      <ProblemSection />
      <WhySection />
      <WhatWeClean />
      <Process />
      <Results />
      <ServiceArea />

      {/* ✅ ONLY ADDITION: the working example link */}
      <RoofCleaningByLocation />

      <CTA />

      <ContactSection />
    </RootLayout>
  )
}