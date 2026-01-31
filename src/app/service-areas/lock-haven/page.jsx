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
  title: 'Pressure Washing Lock Haven PA | House Washing & Roof Cleaning',
  description:
    'Professional pressure washing services in Lock Haven, PA. House washing, roof cleaning, concrete cleaning, and more. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Services"
        title="Complete exterior cleaning for Lock Haven properties"
        invert
      >
        <p>
          From the university area to downtown and the surrounding neighborhoods,
          we provide professional cleaning for all property types in Lock Haven.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="House Washing" invert>
            Soft wash cleaning that's safe for all siding types. We remove years
            of algae, mold, and grime without damage.
          </GridListItem>
          <GridListItem title="Roof Cleaning" invert>
            Black streaks gone, shingles protected. Our low-pressure treatment
            kills algae at the root for results that last.
          </GridListItem>
          <GridListItem title="Concrete Cleaning" invert>
            Driveways, sidewalks, patios — cleaned with commercial surface
            equipment for even, stripe-free results.
          </GridListItem>
          <GridListItem title="Deck & Fence Cleaning" invert>
            Restore weathered wood and composite surfaces. Perfect before
            staining or just to look great again.
          </GridListItem>
          <GridListItem title="Gutter Cleaning" invert>
            Remove debris and brighten oxidized gutters. We clean inside and
            out for complete results.
          </GridListItem>
          <GridListItem title="Commercial Services" invert>
            Businesses, rental properties, and commercial buildings throughout
            Lock Haven. Flexible scheduling available.
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
          Clinton County coverage
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lock Haven is a natural extension of our service area. We're based
            in the Jersey Shore/Williamsport area, which puts us just a quick
            drive up Route 220 from Lock Haven.
          </p>
          <p>
            We understand the unique needs of Lock Haven properties — the river
            humidity, the older housing stock near downtown, and the rental
            properties near the university. Whatever your situation, we have
            the experience to handle it.
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
        title="Lock Haven and Clinton County"
      >
        <p>
          We service all of Lock Haven and the surrounding Clinton County
          communities.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lock Haven City">
            Every neighborhood in the city. Downtown, the university area,
            and all surrounding residential streets.
          </GridListItem>
          <GridListItem title="Castanea Township">
            The areas immediately surrounding Lock Haven. Suburban and
            semi-rural properties.
          </GridListItem>
          <GridListItem title="Mill Hall">
            Just down the road. We service Mill Hall as part of our
            regular Lock Haven route.
          </GridListItem>
          <GridListItem title="Flemington">
            Nearby in Clinton County. Easy to add to our schedule when
            we're in the Lock Haven area.
          </GridListItem>
          <GridListItem title="Avis">
            Between Lock Haven and Jersey Shore. We pass through regularly
            and service the area.
          </GridListItem>
          <GridListItem title="Jersey Shore">
            Our home base. Lock Haven is a straight shot up Route 220
            from Jersey Shore.
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
            Ready to get started in Lock Haven?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Text or call for a fast quote. We'll get back to you the same day.
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

export default function LockHavenPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/service-areas"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            All Service Areas
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Lock Haven, PA"
        title="Professional pressure washing in Lock Haven and Clinton County."
      >
        <p>
          House washing, roof cleaning, and complete exterior cleaning services for
          Lock Haven homes and businesses. Local team, quality results.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="20 min" label="From Jersey Shore" />
          <StatListItem value="Same day" label="Quotes available" />
          <StatListItem value="Local" label="Owned & operated" />
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
