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
  title: 'Deck & Fence Cleaning in Williamsport PA | Wood Restoration',
  description:
    'Professional deck and fence cleaning in Williamsport and Central PA. Restore wood and composite surfaces before staining or just to look new again.',
}

function WhyItMatters() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Why deck cleaning matters
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Wood decks collect mold, mildew, algae, and gray oxidation over time.
            Left untreated, this buildup makes surfaces{' '}
            <strong className="font-semibold text-neutral-950">
              slippery and unsafe
            </strong>
            , accelerates rot, and makes your outdoor space look neglected.
          </p>
          <p>
            Regular cleaning extends the life of your deck, keeps it safe to walk on,
            and maintains the appearance you invested in when it was built.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function OurApproach() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Approach"
        title="The right way to clean wood"
        invert
      >
        <p>
          We don't just blast your deck with high pressure — that damages wood fibers
          and causes fuzzing. We use a smarter method.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash First" invert>
            Wood-safe cleaning solutions break down mold, mildew, and algae without
            the need for damaging high pressure.
          </GridListItem>
          <GridListItem title="Controlled Pressure" invert>
            When pressure is needed, we use controlled, consistent technique that
            cleans effectively without damaging wood grain.
          </GridListItem>
          <GridListItem title="Wood Brightening" invert>
            For heavily grayed wood, we apply a brightening treatment that restores
            the natural color and opens pores for stain absorption.
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
          What we clean
        </h2>
      </FadeIn>
      <List className="mt-10">
        <ListItem title="Pressure-Treated Decks">
          The most common deck material in Central PA. We remove years of grime and
          gray oxidation to restore the original appearance.
        </ListItem>
        <ListItem title="Cedar & Redwood">
          Premium woods require careful handling. We clean gently to preserve the
          natural character while removing buildup.
        </ListItem>
        <ListItem title="Composite & Trex">
          Low-maintenance doesn't mean no-maintenance. We clean composite decking
          without voiding warranties or causing damage.
        </ListItem>
        <ListItem title="Wood Fences">
          Privacy fences, picket fences, split rail — any wood fence that's turned
          gray or grown algae can be restored.
        </ListItem>
        <ListItem title="Vinyl Fences">
          White vinyl fences show every bit of algae and mildew. We soft wash them
          back to bright white.
        </ListItem>
        <ListItem title="Pergolas & Gazebos">
          Outdoor structures get the same treatment — cleaned thoroughly without
          damage to the wood or finish.
        </ListItem>
      </List>
    </Container>
  )
}

function StainPrep() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Stain Prep"
        title="The critical first step before staining"
      >
        <p>
          If you're planning to stain or seal your deck, proper cleaning is essential.
          Stain applied to dirty or contaminated wood won't penetrate properly and
          won't last.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Remove Contaminants">
            Mold, mildew, and algae prevent stain from bonding. We eliminate them
            completely so stain can penetrate properly.
          </GridListItem>
          <GridListItem title="Strip Old Finish">
            If needed, we can help remove old stain or sealer that's failing. Fresh
            wood accepts new stain much better.
          </GridListItem>
          <GridListItem title="Open Wood Pores">
            Our brightening treatment opens wood pores and removes gray oxidation,
            allowing stain to penetrate deep for longer-lasting results.
          </GridListItem>
          <GridListItem title="Proper Dry Time">
            We recommend waiting 24-48 hours after cleaning before applying stain.
            This allows the wood to dry completely for optimal absorption.
          </GridListItem>
          <GridListItem title="Even Surface">
            Cleaning creates an even, consistent surface across the entire deck.
            This means stain goes on evenly without blotching.
          </GridListItem>
          <GridListItem title="Longer Stain Life">
            Stain applied to properly cleaned wood lasts significantly longer than
            stain applied to contaminated surfaces.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Process() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          What to expect
        </h2>
      </FadeIn>
      <List className="mt-10">
        <ListItem title="Assessment">
          We evaluate your deck's condition, wood type, and any problem areas. If
          you're planning to stain, we'll discuss timing and prep requirements.
        </ListItem>
        <ListItem title="Cleaning Solution">
          Wood-safe cleaning solution is applied and allowed to dwell, breaking
          down organic growth without damaging the wood.
        </ListItem>
        <ListItem title="Controlled Rinse">
          We rinse with controlled pressure — enough to clean effectively, not
          enough to damage wood fibers or cause fuzzing.
        </ListItem>
        <ListItem title="Brightening (if needed)">
          For grayed wood, we apply a brightening treatment that restores natural
          color and preps the surface for stain.
        </ListItem>
        <ListItem title="Final Inspection">
          We walk the deck with you to make sure everything looks right and discuss
          any follow-up care or staining timeline.
        </ListItem>
      </List>
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
          We provide deck and fence cleaning services throughout Central Pennsylvania,
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

/* ✅ NEW — LOCATION LINKS (ADDED ONLY) */
function LocationLinks() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Deck & Fence Cleaning by Location"
        title="View deck and fence cleaning near you"
      >
        <p>
          Choose your city below to learn more about our deck and fence cleaning
          services in your area.
        </p>
      </SectionIntro>

      <FadeInStagger className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Button href="/services/deck-fence-cleaning/williamsport" className="justify-center">
            Williamsport
          </Button>
          <Button href="/services/deck-fence-cleaning/state-college" className="justify-center">
            State College
          </Button>
          <Button href="/services/deck-fence-cleaning/sunbury" className="justify-center">
            Sunbury
          </Button>
          <Button href="/services/deck-fence-cleaning/lewisburg" className="justify-center">
            Lewisburg
          </Button>
          <Button href="/services/deck-fence-cleaning/lock-haven" className="justify-center">
            Lock Haven
          </Button>
          <Button href="/services/deck-fence-cleaning/bloomsburg" className="justify-center">
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
            Ready to bring your deck back to life?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Text or call for the fastest quote. Let us know if you're planning to
            stain after cleaning.
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

export default function DeckFenceCleaningPage() {
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
        eyebrow="Deck & Fence Cleaning"
        title="Bring your wood and composite surfaces back to life."
      >
        <p>
          Whether you're prepping for stain or just want it to look new again,
          we clean decks and fences the right way — without damaging the wood.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="No" label="Wood damage" />
          <StatListItem value="24-48 hr" label="Stain-ready dry time" />
          <StatListItem value="Same day" label="Quotes available" />
        </StatList>
      </Container>

      <WhyItMatters />
      <OurApproach />
      <WhatWeClean />
      <StainPrep />
      <Process />
      <ServiceArea />

      {/* ✅ ADDED — DOES NOT REPLACE ANYTHING */}
      <LocationLinks />

      <CTA />

      <ContactSection />
    </RootLayout>
  )
}