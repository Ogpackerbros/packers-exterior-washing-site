import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Pressure Washing Williamsport PA | House Washing & Roof Cleaning',
  description:
    'Professional pressure washing services in Williamsport, PA. House washing, roof cleaning, concrete cleaning, and more. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Services"
        title="Complete exterior cleaning for Williamsport homes and businesses"
        invert
      >
        <p>
          From historic homes downtown to newer construction in the surrounding
          neighborhoods, we have the right approach for every property.
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
            Storefronts, office buildings, and multi-family properties. Flexible
            scheduling to fit your business needs.
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
          Local service, local knowledge
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            We're based right here in the Williamsport area, which means we understand
            the specific challenges Central PA weather creates for your home's exterior.
            The humidity, the tree coverage, the seasonal changes — we deal with it on
            our own properties too.
          </p>
          <p>
            Being local also means we're accountable. Our reputation matters here because
            this is our community. We're not a franchise or a crew passing through — we're
            your neighbors, and we treat every property like it's in our own neighborhood.
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
        eyebrow="Williamsport Neighborhoods"
        title="Serving all of Williamsport and surrounding areas"
      >
        <p>
          We provide service throughout Williamsport and the greater Lycoming County
          area. No matter which part of town you're in, we've got you covered.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Downtown Williamsport">
            Historic homes and commercial buildings in the city center. We're
            experienced with older construction and period details.
          </GridListItem>
          <GridListItem title="Newberry">
            One of Williamsport's largest neighborhoods. We service homes
            throughout Newberry and the surrounding streets.
          </GridListItem>
          <GridListItem title="Loyalsock Township">
            Just east of the city. Residential neighborhoods with a mix of
            established homes and newer construction.
          </GridListItem>
          <GridListItem title="South Williamsport">
            Across the river but just as close. Little League World Series
            territory — we keep those homes looking championship-ready.
          </GridListItem>
          <GridListItem title="Montoursville">
            Quick drive east on Route 180. We're there regularly and happy
            to add your property to the schedule.
          </GridListItem>
          <GridListItem title="And Beyond">
            Jersey Shore, Muncy, Hughesville, Lock Haven — we cover the whole
            region. Just ask if you're not sure.
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
            Ready to get started in Williamsport?
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

export default function WilliamsportPage() {
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
        eyebrow="Williamsport, PA"
        title="Professional pressure washing in Williamsport and Lycoming County."
      >
        <p>
          Your local source for house washing, roof cleaning, and exterior cleaning
          services. Based right here in Central PA, we deliver quality results for
          homes and businesses throughout Williamsport.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Local" label="Owned & operated" />
          <StatListItem value="Same day" label="Quotes available" />
          <StatListItem value="100%" label="Satisfaction focus" />
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
