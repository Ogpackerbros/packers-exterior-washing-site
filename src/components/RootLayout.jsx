'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Brand({ invert = false }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(
        'whitespace-nowrap font-display font-semibold tracking-tight transition',
        // slightly larger brand everywhere
        'text-base sm:text-lg md:text-xl',
        invert
          ? 'text-white hover:text-neutral-200'
          : 'text-neutral-950 hover:text-neutral-700',
      )}
    >
      Packers Exterior Washing Services, LLC
    </Link>
  )
}

function QuickLinks({ invert = false, className }) {
  // NOTE: Put your real URLs here if they’re different.
  const facebookUrl = 'https://www.facebook.com/'
  const googleBusinessUrl = 'https://www.google.com/'

  const basePill =
    'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition'
  const pill = invert
    ? 'bg-white/10 text-white hover:bg-white/15'
    : 'bg-neutral-950 text-white hover:bg-neutral-800'

  return (
    <div className={clsx('flex flex-wrap gap-3', className)}>
      <Link href="/" className={clsx(basePill, pill)}>
        Home
      </Link>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        className={clsx(basePill, pill)}
      >
        Facebook
      </a>
      <a
        href={googleBusinessUrl}
        target="_blank"
        rel="noreferrer"
        className={clsx(basePill, pill)}
      >
        Google Business
      </a>
    </div>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded = false,
  onToggle,
  toggleRef,
  invert = false,
}) {
  return (
    <Container>
      <div className="flex items-start justify-between gap-x-6">
        <div className="min-w-0">
          <Brand invert={invert} />

          {/* Mobile-only: Get a quote pill under the brand */}
<div className="mt-4 sm:hidden">
  <Link
    href="/contact"
    className={clsx(
      'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition',
      invert
        ? 'bg-white/10 text-white hover:bg-white/15'
        : 'bg-neutral-950 text-white hover:bg-neutral-800',
    )}
  >
    Get a quote
  </Link>
</div>

          {/* ✅ MOBILE FIX:
              - On WHITE header (invert=false): HIDE these pills on mobile to avoid overlap.
              - On DARK panel (invert=true): SHOW them (this is your dropdown). */}
          {invert ? (
            <QuickLinks invert className="mt-4" />
          ) : (
            <QuickLinks
              className="mt-4 hidden sm:flex"
              // hidden on mobile, shows on >= sm if you want them visible on desktop
            />
          )}
        </div>

        <div className="flex items-center gap-x-4 sm:gap-x-6">
  {/* Desktop button stays on the right */}
  <div className="hidden sm:block">
    <Button href="/contact">Get a quote</Button>
  </div>

  <button
    ref={toggleRef}
    type="button"
    onClick={onToggle}
    aria-expanded={expanded ? 'true' : 'false'}
    aria-controls={panelId}
    className={clsx(
      'group -m-2.5 rounded-full p-2.5 transition',
      invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
    )}
    aria-label="Toggle navigation"
  >
    <Icon
      className={clsx(
        'h-6 w-6',
        invert
          ? 'fill-white group-hover:fill-neutral-200'
          : 'fill-neutral-950 group-hover:fill-neutral-700',
      )}
    />
  </button>
</div>
      </div>
    </Container>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx(
        'group relative flex items-center justify-center',
        'rounded-3xl border border-white/10',
        'bg-white/5 px-6 py-12',
        'transition hover:bg-white/10 hover:border-white/20',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
      )}
    >
      <span className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {children}
      </span>
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="px-4 pb-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <NavigationItem href="/services">Services</NavigationItem>
          <NavigationItem href="/work">Our Work</NavigationItem>
          <NavigationItem href="/process">Our Process</NavigationItem>
          <NavigationItem href="/contact">Get a Quote</NavigationItem>
        </div>
      </div>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let [isTransitioning, setIsTransitioning] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return (
    <MotionConfig
      transition={
        shouldReduceMotion || !isTransitioning ? { duration: 0 } : undefined
      }
    >
      <header>
        {/* Top bar (light background pages) */}
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? true : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            invert={false}
            onToggle={() => {
              setIsTransitioning(true)
              setExpanded((v) => !v)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        {/* Slide-down nav panel (dark) */}
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : true}
        >
          <motion.div layout className="bg-neutral-950">
            <div className="pt-14 pb-8">
              <Header
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                invert={true}
                onToggle={() => {
                  setIsTransitioning(true)
                  setExpanded((v) => !v)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>

            <Navigation />

            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/10">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Info
                    </h2>
                    <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
                  </div>

                  <div className="sm:border-l sm:border-white/10 sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div layout className="relative isolate flex w-full flex-col pt-9">
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}