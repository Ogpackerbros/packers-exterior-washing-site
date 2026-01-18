// src/app/contact/page.jsx
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Get a Quote',
  description:
    'Get a fast, straightforward quote for house washing, roof cleaning, concrete cleaning, and commercial exterior cleaning in Williamsport and Central PA.',
}

const PHONE_DISPLAY = '570-337-7440'
const PHONE_TEL = '5703377440'
const EMAIL = 'info@packerwashing.com'
const SERVICE_AREA = 'Williamsport, PA + surrounding Central Pennsylvania'

// Put your real links here if you want (these are safe placeholders):
const RESULTS_URL = '/work' // "See results" button goes here

function ContactPill({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-full px-4 py-2 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
    >
      <span className="relative top-px">{children}</span>
    </Link>
  )
}

function SoftPill({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-full px-4 py-2 text-sm font-semibold transition border border-neutral-300 text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50"
    >
      <span className="relative top-px">{children}</span>
    </Link>
  )
}

export default function ContactPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Get a quote" title="Fast, straightforward quotes.">
        <p>
          Tell us what you want cleaned and where it is. We’ll get back to you
          with a simple quote and a few time options.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeInStagger faster className="space-y-12">
          <FadeIn>
            <Border />
          </FadeIn>

          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Quick contact
                </h2>
                <p className="mt-3 max-w-md text-base text-neutral-600">
                  Best way to reach us is call/text. If you email, include a few
                  photos if you can.
                </p>

                <dl className="mt-10 space-y-8 text-sm">
                  <div>
                    <dt className="font-semibold text-neutral-950">
                      Phone (call/text)
                    </dt>
                    <dd className="mt-2">
                      <Link
                        href={`tel:+1${PHONE_TEL}`}
                        className="font-semibold text-neutral-950 underline underline-offset-4 hover:text-neutral-700"
                      >
                        {PHONE_DISPLAY}
                      </Link>
                    </dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-neutral-950">Email</dt>
                    <dd className="mt-2">
                      <Link
                        href={`mailto:${EMAIL}`}
                        className="font-semibold text-neutral-950 underline underline-offset-4 hover:text-neutral-700"
                      >
                        {EMAIL}
                      </Link>
                    </dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-neutral-950">
                      Service Area
                    </dt>
                    <dd className="mt-2 text-neutral-600">{SERVICE_AREA}</dd>
                  </div>
                </dl>

                <div className="mt-10 flex flex-wrap gap-3">
                  <ContactPill href={`tel:+1${PHONE_TEL}`}>Call</ContactPill>
                  <SoftPill href={`sms:+1${PHONE_TEL}`}>Text</SoftPill>
                  <SoftPill href={RESULTS_URL}>See results</SoftPill>
                </div>
              </div>

              {/* Right */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  What to send us
                </h2>

                <ul className="mt-6 space-y-3 text-base text-neutral-600">
                  <li>• Address (or general area)</li>
                  <li>• What you want cleaned (house, roof, concrete, etc.)</li>
                  <li>• Any problem spots (algae, rust, oil stains)</li>
                  <li>• Photos help a lot</li>
                </ul>

                <p className="mt-8 text-base text-neutral-600">
                  Want to keep it simple? Just text “Quote” + your address and
                  what you need cleaned.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <Border />
          </FadeIn>
        </FadeInStagger>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}