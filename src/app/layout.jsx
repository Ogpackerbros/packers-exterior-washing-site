import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Packers Exterior Washing',
    default: 'Packers Exterior Washing | House & Concrete Washing in Central PA',
  },
  description:
    'Packers Exterior Washing provides professional house washing, roof cleaning, and concrete cleaning in Williamsport and surrounding Central PA.',
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
