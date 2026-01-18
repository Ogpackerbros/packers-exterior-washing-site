import Image from 'next/image'
import Link from 'next/link'

import logo from '@/images/brand/logo.png'

export function Logo({ className, href = '/', alt = 'Packers Exterior Washing' }) {
  return (
    <Link href={href} aria-label={alt} className={className}>
      <Image
        src={logo}
        alt={alt}
        priority
        className="h-8 w-auto"
      />
    </Link>
  )
}
