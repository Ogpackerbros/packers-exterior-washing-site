import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Disclaimer | Packers Exterior Washing',
  description:
    'Service disclaimers, estimates, and result expectations for Packers Exterior Washing.',
}

export default function DisclaimerPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Back to Home
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Legal & Service Information"
        title="Disclaimer"
      >
        <p>
          This page outlines important information regarding service results,
          estimates, and limitations to help set clear expectations.
        </p>
      </PageIntro>

      <Container className="mt-16 max-w-3xl">
        <FadeIn className="space-y-12 text-base text-neutral-600">
          
          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              General Information
            </h2>
            <p className="mt-4">
              The information provided on this website is for general informational
              purposes only. While Packers Exterior Washing strives to provide
              accurate, up-to-date, and reliable information, results may vary based
              on factors outside of our control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Service Results & Effectiveness
            </h2>
            <p className="mt-4">
              Exterior cleaning results depend on surface type, age, condition,
              previous maintenance, environmental exposure, and the nature of
              staining. While our professional methods deliver significant
              improvement, we do not guarantee complete stain removal in all cases.
            </p>
            <p className="mt-4">
              Certain stains such as oxidation, deep organic growth, rust, oil
              penetration, or long-term neglect may improve substantially but may
              not be fully removable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Roof Cleaning Disclaimer
            </h2>
            <p className="mt-4">
              Roof cleaning results vary depending on roofing material, severity of
              algae or moss, surrounding tree coverage, shade, and weather
              conditions. Soft wash roof cleaning is highly effective but does not
              permanently prevent future organic growth.
            </p>
            <p className="mt-4">
              Regrowth timelines vary by property, and no long-term or permanent
              results are guaranteed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Estimates & Pricing
            </h2>
            <p className="mt-4">
              All prices, quotes, and estimates provided—whether online, by phone,
              text, email, or in person—are non-binding unless otherwise stated in
              writing.
            </p>
            <p className="mt-4">
              Final pricing may change based on actual site conditions, accessibility,
              surface area, stain severity, additional services requested, or safety
              considerations discovered during service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Scheduling & Timeframes
            </h2>
            <p className="mt-4">
              Service dates, timelines, and completion estimates are approximate and
              may be affected by weather, equipment availability, site conditions,
              or other unforeseen factors.
            </p>
            <p className="mt-4">
              Packers Exterior Washing does not guarantee exact service dates or
              completion times unless explicitly agreed upon in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Photos & Examples
            </h2>
            <p className="mt-4">
              Before-and-after photos displayed on this website or on social media
              represent examples of past results. Individual results may vary, and
              similar outcomes are not guaranteed for every property.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              No Guarantees or Warranties
            </h2>
            <p className="mt-4">
              Packers Exterior Washing makes no guarantees, warranties, or
              representations regarding specific results unless expressly stated
              in a written service agreement.
            </p>
            <p className="mt-4">
              All services are provided “as is” and “as available.”
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Questions or Concerns
            </h2>
            <p className="mt-4">
              If you have questions about expected results, service limitations, or
              whether a specific issue can be addressed, please contact us directly
              before scheduling service.
            </p>
          </section>

        </FadeIn>
      </Container>
    </RootLayout>
  )
}