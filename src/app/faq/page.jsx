'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

const FAQ_DATA = [
  {
    section: 'General questions & expectations',
    items: [
      {
        q: 'Do results vary from property to property?',
        a: 'Yes. Surface condition, material type, age, shade, and organic buildup all affect results. We explain realistic expectations before any work begins.',
      },
      {
        q: 'Can every stain or discoloration be removed?',
        a: 'No. Some stains are permanent or deeply embedded. We aim for the best possible improvement without damaging the surface.',
      },
      {
        q: 'Is exterior cleaning safe for my home?',
        a: 'Yes, when done correctly. We use soft washing and controlled pressure methods designed to clean safely.',
      },
      {
        q: 'Do you use high pressure on homes or roofs?',
        a: 'No. High pressure is avoided on siding and roofs to prevent damage.',
      },
      {
        q: 'Do I need to be home during service?',
        a: 'Usually no. As long as we have access and water, most jobs can be completed without you being present.',
      },
      {
        q: 'How long does a typical job take?',
        a: 'Job length depends on size, condition, and services being performed. We’ll give you a realistic timeframe upfront.',
      },
    ],
  },

  {
    section: 'Roof cleaning',
    items: [
      {
        q: 'Is roof cleaning safe for shingles?',
        a: 'Yes. We use low-pressure soft washing methods recommended by roofing manufacturers.',
      },
      {
        q: 'What causes black streaks on roofs?',
        a: 'They’re caused by algae that feeds on materials in shingles and spreads over time.',
      },
      {
        q: 'Will roof cleaning damage my gutters?',
        a: 'No. Gutters are rinsed thoroughly and protected during the process.',
      },
      {
        q: 'How long do roof cleaning results last?',
        a: 'Typically 2–5 years depending on shade, humidity, and surrounding tree coverage.',
      },
      {
        q: 'Does roof cleaning stop future growth?',
        a: 'It significantly slows regrowth, but organic growth can return over time.',
      },
      {
        q: 'Is roof cleaning just cosmetic?',
        a: 'No. Algae holds moisture and can shorten the lifespan of roofing materials.',
      },
    ],
  },

  {
    section: 'House washing',
    items: [
      {
        q: 'Is soft washing safe for siding?',
        a: 'Yes. Soft washing uses low pressure and siding-safe solutions.',
      },
      {
        q: 'Will soft washing kill mold and algae?',
        a: 'Yes. It treats growth at the root rather than just rinsing it away.',
      },
      {
        q: 'Can soft washing damage paint?',
        a: 'No, when done properly. It is far safer than high-pressure washing.',
      },
      {
        q: 'Does house washing clean windows?',
        a: 'Windows are rinsed, but this is not a detailed window cleaning service.',
      },
      {
        q: 'How often should a house be washed?',
        a: 'Most homes benefit from cleaning every 1–2 years.',
      },
      {
        q: 'Will landscaping be affected?',
        a: 'No. Plants are pre-soaked and rinsed thoroughly.',
      },
    ],
  },

  {
    section: 'Concrete cleaning',
    items: [
      {
        q: 'Why does concrete get dark over time?',
        a: 'Concrete is porous and absorbs dirt, algae, and organic buildup.',
      },
      {
        q: 'Can oil stains be completely removed?',
        a: 'Some improve greatly, but deep stains may leave shadowing.',
      },
      {
        q: 'Will pressure washing damage concrete?',
        a: 'No, when commercial equipment and correct technique are used.',
      },
      {
        q: 'What are zebra stripes?',
        a: 'Uneven cleaning lines caused by improper pressure washing techniques.',
      },
      {
        q: 'Do you clean sidewalks and patios?',
        a: 'Yes. We clean driveways, sidewalks, patios, and pool decks.',
      },
      {
        q: 'Is concrete sealed after cleaning?',
        a: 'No. Sealing is a separate service.',
      },
    ],
  },

  {
    section: 'Deck & fence cleaning',
    items: [
      {
        q: 'Will cleaning damage wood?',
        a: 'No. We use wood-safe solutions and controlled pressure.',
      },
      {
        q: 'Is cleaning required before staining?',
        a: 'Yes. Proper cleaning allows stain to penetrate correctly.',
      },
      {
        q: 'How long should wood dry before staining?',
        a: 'Typically 24–48 hours depending on conditions.',
      },
      {
        q: 'Can composite decking be cleaned?',
        a: 'Yes. Composite and Trex decking can be cleaned safely.',
      },
      {
        q: 'Will gray wood regain color?',
        a: 'Yes, with proper cleaning and brightening treatment.',
      },
      {
        q: 'Does cleaning extend deck life?',
        a: 'Yes. Removing organic growth helps slow deterioration.',
      },
    ],
  },

  {
    section: 'Commercial pressure washing',
    items: [
      {
        q: 'Do you offer off-hours service?',
        a: 'Yes. We schedule work to minimize business disruption.',
      },
      {
        q: 'Can large properties be cleaned in phases?',
        a: 'Yes. This is common for commercial sites.',
      },
      {
        q: 'Do you offer recurring maintenance?',
        a: 'Yes. Many businesses choose scheduled cleaning plans.',
      },
      {
        q: 'Are sidewalks and entrances included?',
        a: 'Yes. High-traffic areas are a priority.',
      },
      {
        q: 'Do you clean dumpster pads?',
        a: 'Yes, as part of commercial services.',
      },
      {
        q: 'Is insurance required for commercial work?',
        a: 'Yes. We carry appropriate insurance for commercial jobs.',
      },
    ],
  },
]

export default function FAQPage() {
  const [query, setQuery] = useState('')

  const normalizedQuery = query.toLowerCase()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Frequently Asked Questions"
        title="Find answers fast"
      >
        <p>
          Search below or browse by topic. If you still have questions,
          we’re happy to walk you through what’s realistic for your property.
        </p>
      </PageIntro>

      <Container className="mt-12">
        <input
          type="text"
          placeholder="Search questions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-neutral-300 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-neutral-900"
        />
      </Container>

      {FAQ_DATA.map((section) => {
        const filteredItems = section.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalizedQuery) ||
            item.a.toLowerCase().includes(normalizedQuery),
        )

        if (filteredItems.length === 0) return null

        return (
          <Container key={section.section} className="mt-24">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                {section.section}
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-8">
              {filteredItems.map((item, i) => (
                <FadeIn key={i}>
                  <h3 className="font-semibold text-neutral-950">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-base text-neutral-600">
                    {item.a}
                  </p>
                </FadeIn>
              ))}
            </div>
          </Container>
        )
      })}

      <Container className="mt-32 text-center">
        <FadeIn>
          <Link
            href="/contact"
            className="font-semibold text-neutral-950 underline"
          >
            Still have questions? Contact us →
          </Link>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}