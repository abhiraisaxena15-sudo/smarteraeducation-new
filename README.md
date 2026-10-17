# Smart Era Education — Website

React + Vite + Tailwind. Live: https://smarteraeducation.in

## Kuch badalna ho toh

| Kya badalna hai | File |
|---|---|
| Phone, email, address, Instagram, intake year, "5000+" | `src/data/site.ts` |
| Universities ki list | `src/data/site.ts` → `universities` |
| Real student reviews | `src/data/testimonials.ts` |
| FAQ | `src/data/faqs.ts` |
| Privacy / Terms / Disclaimer | `src/data/legal.ts` |
| Ticker ki lines | `src/components/AdmissionTicker.tsx` |

## Leads → Google Sheet
Steps: [`google-apps-script/SETUP.md`](google-apps-script/SETUP.md).
Jab tak Sheet URL nahi lagaya, form student ki details WhatsApp pe bhejta hai.

## Commands
```bash
npm install
npm run dev      # local preview
npm run build    # production build (dist/) — har page pehle se render hota hai (SEO)
```

## Deploy (Vercel)
Build command `npm run build`, output folder `dist`. GitHub pe push karte hi Vercel apne aap deploy karega.
Google Sheet URL env variable se dena ho toh: `VITE_LEADS_ENDPOINT`.

Deploy ke baad: [Google Search Console](https://search.google.com/search-console) mein site add karke
`https://smarteraeducation.in/sitemap.xml` submit karo.
