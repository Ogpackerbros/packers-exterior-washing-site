export default function sitemap() {
  const baseUrl = 'https://packerwashing.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/process',
    '/work',
    '/contact',

    // Core services
    '/services/roof-cleaning',
    '/services/house-washing',
    '/services/concrete-cleaning',
    '/services/deck-fence-cleaning',
    '/services/commercial-pressure-washing',

    // Roof cleaning – Tier 1 cities
    '/services/roof-cleaning/williamsport',
    '/services/roof-cleaning/state-college',
    '/services/roof-cleaning/lewisburg',
    '/services/roof-cleaning/lock-haven',
    '/services/roof-cleaning/bloomsburg',
    '/services/roof-cleaning/sunbury',

    // House washing – Tier 1 cities
    '/services/house-washing/williamsport',
    '/services/house-washing/state-college',
    '/services/house-washing/lewisburg',
    '/services/house-washing/lock-haven',
    '/services/house-washing/bloomsburg',
    '/services/house-washing/sunbury',

    // Concrete cleaning – Tier 1 cities
    '/services/concrete-cleaning/williamsport',
    '/services/concrete-cleaning/state-college',
    '/services/concrete-cleaning/lewisburg',
    '/services/concrete-cleaning/lock-haven',
    '/services/concrete-cleaning/bloomsburg',
    '/services/concrete-cleaning/sunbury',

    // Deck & fence – Tier 1 cities
    '/services/deck-fence-cleaning/williamsport',
    '/services/deck-fence-cleaning/state-college',
    '/services/deck-fence-cleaning/lewisburg',
    '/services/deck-fence-cleaning/lock-haven',
    '/services/deck-fence-cleaning/bloomsburg',
    '/services/deck-fence-cleaning/sunbury',

    // Commercial
    '/services/commercial-pressure-washing',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}