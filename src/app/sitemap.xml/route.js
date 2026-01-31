export function GET() {
  const pages = [
    "",
    "/about",
    "/services",
    "/work",
    "/process",
    "/contact",
    "/blog",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `<url><loc>https://packerwashing.com${p}</loc></url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}