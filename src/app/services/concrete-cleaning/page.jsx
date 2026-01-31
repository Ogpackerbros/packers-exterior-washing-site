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
  title: 'Concrete Cleaning in Williamsport PA | Driveway & Patio Washing',
  description:
    'Professional concrete cleaning in Williamsport and Central PA. Driveways, sidewalks, patios, and pool decks pressure washed to look like new.',
}

function WhyProfessional() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Why professional concrete cleaning?
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            A regular pressure washer leaves zebra stripes and uneven results. That's
            because the wand tip moves faster than the water can clean — creating
            visible lines across your concrete.
          </p>
          <p>
            We use <strong className="font-semibold text-neutral-950">commercial surface cleaners</strong> that
            spin dual jets at high speed, delivering consistent pressure across the
            entire surface. The result is an even, uniform clean with no stripes,
            no missed spots, and no wand marks.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhatWeClean() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="What We Clean"
        title="Every concrete surface, done right"
        invert
      >
        <p>
          From driveways to pool decks, we clean all types of concrete and hardscape
          surfaces with the right equipment and approach.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Driveways" invert>
            The biggest visual impact. We remove years of tire marks, oil stains,
            algae, and embedded dirt for a dramatic transformation.
          </GridListItem>
          <GridListItem title="Sidewalks & Walkways" invert>
            High-traffic areas collect grime fast. We clean paths, walkways, and
            front entries to restore curb appeal.
          </GridListItem>
          <GridListItem title="Patios" invert>
            Outdoor living spaces deserve to look great. We clean concrete, stamped
            concrete, and paver patios.
          </GridListItem>
          <GridListItem title="Pool Decks" invert>
            Slippery algae buildup is a safety hazard. We clean pool surrounds
            thoroughly while protecting your pool and landscaping.
          </GridListItem>
          <GridListItem title="Porches & Steps" invert>
            Front porches, back steps, basement entrances — any concrete surface
            that needs attention.
          </GridListItem>
          <GridListItem title="Garage Floors" invert>
            Oil, grease, and road grime build up fast. We can clean garage floors
            and aprons as part of your service.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function StainTreatment() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Stain treatment
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Not all stains are created equal. We pre-treat problem areas based on
            what's causing the stain:
          </p>
        </div>
      </FadeIn>
      <List className="mt-10">
        <ListItem title="Oil & Grease">
          Degreasers break down automotive fluids before we clean. Most oil stains
          improve dramatically, though deep penetration may leave some shadow.
        </ListItem>
        <ListItem title="Rust">
          Rust stains from fertilizer, metal furniture, or irrigation require
          specialized treatment. We use rust removers that work without damaging
          concrete.
        </ListItem>
        <ListItem title="Organic Growth">
          Algae, mold, and mildew respond well to our cleaning process. We kill
          growth at the source so it doesn't come back quickly.
        </ListItem>
        <ListItem title="Battery Acid">
          Acid stains can sometimes be improved but often leave permanent marks.
          We'll tell you upfront what to expect.
        </ListItem>
      </List>
      <FadeIn>
        <p className="mt-8 text-base text-neutral-600">
          We're honest about results — some stains are permanent. We'll always tell
          you upfront what's realistic for your specific situation.
        </p>
      </FadeIn>
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
        title="Our concrete cleaning process"
      >
        <p>
          Thorough, consistent results from start to finish. No shortcuts, no
          stripes, no missed spots.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Pre-Treatment">
            Oil stains, rust spots, and heavy buildup get pre-treated with
            appropriate solutions before we start cleaning.
          </GridListItem>
          <GridListItem title="Surface Cleaning">
            Our commercial surface cleaner delivers even, consistent pressure
            across every square foot. No zebra stripes.
          </GridListItem>
          <GridListItem title="Edge Detail">
            Where the surface cleaner can't reach — along walls, steps, and
            cracks — we detail with our wand for complete coverage.
          </GridListItem>
          <GridListItem title="Post-Treatment">
            Any remaining problem spots get additional attention. We don't leave
            until the job is done right.
          </GridListItem>
          <GridListItem title="Rinse & Cleanup">
            All debris, runoff, and displaced dirt gets rinsed away. We leave
            the area cleaner than we found it.
          </GridListItem>
          <GridListItem title="Final Walkthrough">
            We walk the area with you to make sure you're satisfied with every
            inch of the results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Combo() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl border border-neutral-200 bg-white p-8 sm:p-12">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Pairs well with house washing
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Most customers add concrete cleaning to their house wash for a complete
          exterior transformation. We offer package pricing when you combine
          services — ask for details when you get your quote.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button href="/services/house-washing">Learn About House Washing</Button>
          <Button href="/contact" className="bg-neutral-100 text-neutral-950 hover:bg-neutral-200">
            Get Package Pricing
          </Button>
        </div>
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
          We provide concrete cleaning services throughout Central Pennsylvania,
          including Williamsport, Montoursville, Jersey Shore, South Williamsport,
          Muncy, Hughesville, and surrounding communities.
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

/* ✅ NEW — LOCATION BUTTON SECTION */
function LocationLinks() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Concrete Cleaning by Location"
        title="View localized concrete cleaning services"
      >
        <p>
          Select your city below to learn more about our concrete cleaning services
          in your area.
        </p>
      </SectionIntro>

      <FadeInStagger className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Button href="/services/concrete-cleaning/williamsport" className="justify-center">
            Williamsport
          </Button>
          <Button href="/services/concrete-cleaning/state-college" className="justify-center">
            State College
          </Button>
          <Button href="/services/concrete-cleaning/sunbury" className="justify-center">
            Sunbury
          </Button>
          <Button href="/services/concrete-cleaning/lewisburg" className="justify-center">
            Lewisburg
          </Button>
          <Button href="/services/concrete-cleaning/lock-haven" className="justify-center">
            Lock Haven
          </Button>
          <Button href="/services/concrete-cleaning/bloomsburg" className="justify-center">
            Bloomsburg
          </Button>
        </div>
      </FadeInStagger>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ready for concrete that looks brand new?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Text or call for the fastest quote. Include your address and let us know
            what surfaces need cleaning.
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

export default function ConcreteCleaningPage() {
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
        eyebrow="Concrete Cleaning"
        title="Driveways, sidewalks, and patios that look brand new."
      >
        <p>
          Years of grime, oil stains, and algae disappear with professional surface
          cleaning. No stripes, no missed spots — just even, consistent results.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="No" label="Zebra stripes" />
          <StatListItem value="100%" label="Even coverage" />
          <StatListItem value="Same day" label="Quotes available" />
        </StatList>
      </Container>

      <WhyProfessional />
      <WhatWeClean />
      <StainTreatment />
      <Process />
      <Combo />
      <ServiceArea />

      {/* ✅ INSERTED — DOES NOT REPLACE ANYTHING */}
      <LocationLinks />

      <CTA />
      <ContactSection />
    </RootLayout>
  )
}