export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Packers Exterior Washing Services, LLC",
    "url": "https://packerwashing.com",
    "telephone": "+1-570-337-7440",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Williamsport",
      "addressRegion": "PA",
      "addressCountry": "US"
    },
    "areaServed": [
      "Williamsport PA",
      "State College PA",
      "Lewisburg PA",
      "Lock Haven PA",
      "Bloomsburg PA",
      "Sunbury PA"
    ],
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.google.com/"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}