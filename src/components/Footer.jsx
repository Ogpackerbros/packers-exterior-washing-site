import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SocialMedia } from '@/components/SocialMedia'

export function Footer() {
  return (
    <footer className="mt-32">
      <FadeIn>
        <Border />
        <Container className="grid grid-cols-1 gap-x-8 gap-y-12 py-16 lg:grid-cols-2">
          <div>
            <div className="font-display text-xl font-semibold tracking-tight text-neutral-950">
              Packers Exterior Washing Services, LLC
            </div>

            <p className="mt-6 text-sm text-neutral-600">
              Professional exterior cleaning for homes and small businesses.
              Soft wash-safe, detail-oriented, and built for results.
            </p>

            <div className="mt-6">
              <SocialMedia />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold text-neutral-950">Navigate</h2>
              <ul role="list" className="mt-4 space-y-3 text-sm">
                <li>
                  <Link className="text-neutral-600 hover:text-neutral-950" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-600 hover:text-neutral-950"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-600 hover:text-neutral-950"
                    href="/process"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link className="text-neutral-600 hover:text-neutral-950" href="/work">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-600 hover:text-neutral-950"
                    href="/contact"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-neutral-950">Info</h2>
              <div className="mt-4 space-y-6 text-sm text-neutral-600">
                <div>
                  <div className="font-semibold text-neutral-950">Service Area</div>
                  <div className="mt-1">
                    Williamsport, PA + surrounding Central Pennsylvania
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-neutral-950">Hours</div>
                  <div className="mt-1">Mon–Sat 8am–6pm</div>
                </div>

                <div>
                  <div className="font-semibold text-neutral-950">Contact</div>
                  <div className="mt-1 space-y-1">
                    <a className="underline" href="mailto:info@packerwashing.com">
                      info@packerwashing.com
                    </a>
                    <div>
                      <a className="underline" href="tel:+15703377440">
                        (570) 337-7440
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>

      <div className="pb-16">
        <Container>
          <Border />
          <div className="pt-6 text-sm text-neutral-600">
            © {new Date().getFullYear()} Packers Exterior Washing Services, LLC. All rights
            reserved.
          </div>
        </Container>
      </div>
    </footer>
  )
}