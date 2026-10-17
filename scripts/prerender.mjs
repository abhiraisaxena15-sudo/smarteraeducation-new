/**
 * Build ke baad har page ka poora HTML pehle se bana deta hai,
 * taaki Google aur WhatsApp/Facebook previews ko content dikhe.
 * `npm run build` apne aap ise chalata hai.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, legalPages, faqs, site, universities } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const homeTitle = 'Smart Era Education | University Admission Consultant – Regular & Online Degrees';
const homeDesc = `100% free admission counselling for 20+ universities — Chandigarh University, LPU, Manipal, VIT, NMIMS, Amity Online and more. ${site.studentsGuided.toLocaleString('en-IN')}+ students guided. Call ${site.phones[0].display}.`;

const organization = {
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/favicon.svg`,
  image: `${site.url}/og-image.jpg`,
  description: homeDesc,
  telephone: site.phones.map((p) => p.tel),
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pincode,
    addressCountry: site.address.country,
  },
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: [site.instagram],
  knowsAbout: universities.map((u) => u.name),
};

const routes = [
  {
    path: '/',
    title: homeTitle,
    description: homeDesc,
    type: 'website',
    ld: {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        { '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: `${site.url}/`, publisher: { '@id': `${site.url}/#organization` } },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    },
  },
  ...legalPages.map((p) => ({
    path: p.path,
    title: `${p.title} | ${site.name}`,
    description: p.description,
    type: 'article',
    ld: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: p.title,
      url: `${site.url}${p.path}`,
      isPartOf: { '@type': 'WebSite', name: site.name, url: `${site.url}/` },
    },
  })),
];

for (const r of routes) {
  const url = r.path === '/' ? `${site.url}/` : `${site.url}${r.path}`;
  const seo = [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${r.type}" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`,
  ].join('\n    ');

  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, seo)
    .replace('<!--seo:jsonld-->', jsonLd(r.ld))
    .replace('<!--app-html-->', render(r.path));

  const outDir = r.path === '/' ? dist : path.join(dist, r.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`prerendered ${r.path}`);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${r.path === '/' ? `${site.url}/` : `${site.url}${r.path}`}</loc><lastmod>${today}</lastmod><priority>${r.path === '/' ? '1.0' : '0.3'}</priority></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log('wrote sitemap.xml');

fs.rmSync(ssrDir, { recursive: true, force: true });
