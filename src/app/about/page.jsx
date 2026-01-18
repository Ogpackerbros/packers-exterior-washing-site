import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'About',
  description:
    'Packers Exterior Washing is a local exterior cleaning company serving Williamsport and Central PA.',
}

export default function AboutPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About" title="Local, reliable exterior cleaning.">
        <p>
          Packers Exterior Washing is built around one simple idea: show up on time,
          treat homes like they’re our own, and deliver results that look brand-new.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="prose prose-neutral max-w-none">
            <h2>What we do</h2>
            <p>
              We specialize in soft washing for siding and roofs, plus pressure washing
              for concrete where appropriate. Our goal is to clean safely—without damage—
              and keep your property looking sharp.
            </p>

            <h2>What you can expect</h2>
            <ul>
              <li>Clear upfront pricing and straightforward scheduling</li>
              <li>Protection of landscaping and careful setup</li>
              <li>Before/after photos on request</li>
              <li>Professional communication and cleanup</li>
            </ul>

            <h2>Service area</h2>
            <p>
              Williamsport, Jersey Shore, Montoursville, South Williamsport, and nearby areas.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
