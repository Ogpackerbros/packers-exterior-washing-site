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
  title: 'Commercial Pressure Washing in Williamsport PA | Business Exterior Cleaning',
  description:
    'Professional commercial pressure washing in Williamsport and Central PA. Storefronts, offices, apartments, sidewalks, and parking areas.',
}

function WhyItMatters() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Why commercial exterior cleaning matters
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            First impressions matter. A dirty storefront, stained sidewalk, or grimy
            building exterior tells customers you don't pay attention to details —
            even if that's not true.
          </p>
          <p>
            Regular exterior cleaning{' '}
            <strong className="font-semibold text-neutral-950">
              maintains your professional image
            </strong>
            , protects your investment, and can help with code compliance and lease
            requirements. It's one of the highest-ROI maintenance investments you can
            make.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function PropertyTypes() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Properties We Service"
        title="Commercial properties of all types"
        invert
      >
        <p>
          From retail storefronts to industrial facilities, we have the equipment
          and experience to handle commercial properties throughout Central PA.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Retail & Storefronts" invert>
            Shopping centers, standalone retail, and storefront businesses. Keep
            your entrance clean and inviting for customers.
          </GridListItem>
          <GridListItem title="Office Buildings" invert>
            Professional appearance matters for client-facing businesses. We clean
            building exteriors, entries, and common areas.
          </GridListItem>
          <GridListItem title="Multi-Family" invert>
            Apartment complexes, condos, and townhome communities. Common areas,
            walkways, and building exteriors.
          </GridListItem>
          <GridListItem title="Restaurants & Hospitality" invert>
            Outdoor dining areas, dumpster pads, drive-thrus, and building exteriors.
            Health code compliance matters.
          </GridListItem>
          <GridListItem title="Medical & Dental" invert>
            Clean facilities signal quality care. We help medical offices maintain
            a pristine, professional appearance.
          </GridListItem>
          <GridListItem title="Industrial & Warehouse" invert>
            Loading docks, fleet areas, and building exteriors. We handle heavy-duty
            commercial cleaning needs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Commercial services
        </h2>
      </FadeIn>
      <List className="mt-10">
        <ListItem title="Building Exterior Washing">
          Soft wash cleaning for commercial building exteriors — brick, stucco,
          EIFS, metal panels, and more. Safe for signage and fixtures.
        </ListItem>
        <ListItem title="Sidewalk & Entryway Cleaning">
          High-traffic areas need regular attention. We remove gum, stains, and
          embedded grime from concrete walkways and entrances.
        </ListItem>
        <ListItem title="Parking Lot & Garage Cleaning">
          Oil stains, tire marks, and general grime accumulate fast. We clean
          parking surfaces and structures.
        </ListItem>
        <ListItem title="Dumpster Pad Cleaning">
          Grease, odors, and organic buildup create health and pest issues.
          Regular dumpster pad cleaning eliminates these problems.
        </ListItem>
        <ListItem title="Drive-Thru Cleaning">
          Food service drive-thrus collect grease, spills, and staining. We
          clean lanes, menu boards, and surrounding concrete.
        </ListItem>
        <ListItem title="Graffiti Removal">
          Quick response matters for graffiti. We remove unwanted paint and
          tagging from most commercial surfaces.
        </ListItem>
      </List>
    </Container>
  )
}

function Scheduling() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Flexible Scheduling"
        title="We work around your business"
      >
        <p>
          We understand that business hours matter. We schedule work to minimize
          disruption to your customers, employees, and operations.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Early Morning">
            Start before your business opens. Work is complete and dry before
            customers arrive.
          </GridListItem>
          <GridListItem title="Evening">
            After-hours cleaning lets you maintain your property without
            impacting daytime operations.
          </GridListItem>
          <GridListItem title="Weekends">
            Saturday and Sunday availability for businesses that need minimal
            weekday disruption.
          </GridListItem>
          <GridListItem title="Off-Peak Hours">
            For 24-hour businesses, we identify your slowest periods and
            schedule around them.
          </GridListItem>
          <GridListItem title="Phased Approach">
            Large properties can be cleaned in sections over multiple visits
            to minimize any single disruption.
          </GridListItem>
          <GridListItem title="Weather Flexibility">
            Commercial schedules need reliability. We monitor weather and
            communicate proactively about any changes.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Maintenance() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl border border-neutral-200 bg-white p-8 sm:p-12">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Recurring maintenance plans
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Many commercial properties benefit from scheduled maintenance rather than
          one-time cleaning. We offer flexible maintenance agreements with:
        </p>
        <FadeIn className="mt-8">
          <TagList>
            <TagListItem>Monthly service</TagListItem>
            <TagListItem>Quarterly service</TagListItem>
            <TagListItem>Seasonal service</TagListItem>
            <TagListItem>Priority scheduling</TagListItem>
            <TagListItem>Consistent pricing</TagListItem>
            <TagListItem>Custom frequency</TagListItem>
          </TagList>
        </FadeIn>
        <p className="mt-8 text-base text-neutral-600">
          Maintenance customers get priority scheduling, locked-in pricing, and
          consistent results year-round. Ask about a custom plan for your property.
        </p>
        <div className="mt-8">
          <Button href="/contact">Discuss Maintenance Options</Button>
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
          We provide commercial pressure washing services throughout Central
          Pennsylvania, including Williamsport, Montoursville, Jersey Shore,
          and surrounding communities.
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

/* ✅ NEW — LOCATION LINKS */
function LocationLinks() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Commercial Pressure Washing by Location"
        title="Commercial cleaning services near you"
      >
        <p>
          Select your city below to learn more about our commercial pressure washing
          services in your area.
        </p>
      </SectionIntro>

      <FadeInStagger className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Button href="/services/commercial-pressure-washing/williamsport" className="justify-center">
            Williamsport
          </Button>
          <Button href="/services/commercial-pressure-washing/state-college" className="justify-center">
            State College
          </Button>
          <Button href="/services/commercial-pressure-washing/sunbury" className="justify-center">
            Sunbury
          </Button>
          <Button href="/services/commercial-pressure-washing/lewisburg" className="justify-center">
            Lewisburg
          </Button>
          <Button href="/services/commercial-pressure-washing/lock-haven" className="justify-center">
            Lock Haven
          </Button>
          <Button href="/services/commercial-pressure-washing/bloomsburg" className="justify-center">
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
            Ready to discuss your commercial property?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Call or email to schedule a walkthrough. We'll assess your property
            and provide a detailed estimate.
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

export default function CommercialPressureWashingPage() {
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
        eyebrow="Commercial Pressure Washing"
        title="Keep your business looking professional."
      >
        <p>
          First impressions matter. We help businesses maintain clean, inviting
          exteriors that customers notice — on a schedule that works for you.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Flexible" label="Scheduling options" />
          <StatListItem value="Custom" label="Maintenance plans" />
          <StatListItem value="Free" label="On-site estimates" />
        </StatList>
      </Container>

      <WhyItMatters />
      <PropertyTypes />
      <Services />
      <Scheduling />
      <Maintenance />
      <ServiceArea />

      {/* ✅ ADDED — DOES NOT REPLACE ANYTHING */}
      <LocationLinks />

      <CTA />

      <ContactSection />
    </RootLayout>
  )
}