import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32">
      <FadeIn>
        <Border />
        <div className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-neutral-950">
              Quick contact
            </h2>

            <p className="mt-4 max-w-xl text-base text-neutral-600">
              Fastest way to reach us is call or text. If you email, include a couple photos
              and your address (or general area) for the quickest quote.
            </p>

            <dl className="mt-10 space-y-8 text-sm">
              <div>
                <dt className="font-semibold text-neutral-950">Phone (call/text)</dt>
                <dd className="mt-2">
                  <a
                    className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
                    href="tel:+15703377440"
                  >
                    (570) 337-7440
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-neutral-950">Email</dt>
                <dd className="mt-2">
                  <a
                    className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
                    href="mailto:info@packerwashing.com"
                  >
                    info@packerwashing.com
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-neutral-950">Service Area</dt>
                <dd className="mt-2 text-neutral-600">
                  Williamsport, PA + surrounding Central Pennsylvania
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+15703377440"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Call
              </a>
              <a
                href="sms:+15703377440"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:border-neutral-400"
              >
                Text
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:border-neutral-400"
              >
                See results
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-semibold text-neutral-950">
              What to send us
            </h2>

            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              <li>• Address (or general area)</li>
              <li>• What you want cleaned (house, roof, concrete, etc.)</li>
              <li>• Any problem spots (algae, rust, oil stains)</li>
              <li>• Photos help a lot</li>
            </ul>

            <p className="mt-8 text-base text-neutral-600">
              Want to keep it simple? Text{' '}
              <span className="font-semibold text-neutral-950">“Quote”</span> + your address and what you
              need cleaned.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}