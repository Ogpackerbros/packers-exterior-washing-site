import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Our Process',
  description:
    'How Packers Exterior Washing delivers safe, consistent results from quote to final walkthrough.',
}

const steps = [
  {
    title: '1) Quick quote',
    body: 'Send photos or an address and what you want cleaned. We’ll give you a clear price and a time window.',
  },
  {
    title: '2) Schedule',
    body: 'We pick a day that works for you and confirm what to expect (water access, pets, delicate plants, etc.).',
  },
  {
    title: '3) Protect & prep',
    body: 'We pre-wet landscaping and protect what needs protected. We set up to avoid mess and avoid damage.',
  },
  {
    title: '4) Clean the right way',
    body: 'Soft wash where appropriate (siding/roof), and pressure where appropriate (concrete). No “one method for everything.”',
  },
  {
    title: '5) Final walkthrough',
    body: 'We double-check for missed spots and leave the property tidy. Before/after photos when helpful.',
  },
]

function StepCard({ title, body }) {
  return (
    <div className="rounded-4xl border border-neutral-200 bg-white p-8">
      <h2 className="font-display text-2xl font-semibold text-neutral-950">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base text-neutral-600">{body}</p>
    </div>
  )
}

export default function ProcessPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="Simple, safe, and consistent.">
        <p>
          No sales circus — just a clear quote, professional cleaning, and results you can see.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeInStagger faster className="grid gap-8">
          {steps.map((step) => (
            <FadeIn key={step.title}>
              <StepCard title={step.title} body={step.body} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}