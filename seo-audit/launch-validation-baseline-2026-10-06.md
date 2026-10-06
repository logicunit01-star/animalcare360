# AnimalCare360 Launch Validation Baseline

Baseline date: 2026-10-06
Primary acquisition wedge: Commercial cattle fattening management
Commercial promise: Know the true cost, weight gain, and profit of every animal.

## Production Status

- Production domain: https://www.animalcare360.com/
- Deployment branch: `main`
- Current launch tracking commit: `61f2c20`
- Search Console verification commit: `bc1255b`
- Search Console property: `https://www.animalcare360.com/`
- Sitemap: https://www.animalcare360.com/sitemap.xml
- Sitemap URLs: 40
- Unique internal destinations checked: 39
- Broken internal destinations found: 0
- Sitemap and public routes return HTTP 200 when tested directly.
- GTM, GA4, and Microsoft Clarity scripts return HTTP 200.
- GTM and GA4 now render in the document head.
- Microsoft Clarity remains deferred to protect rendering performance.

## Search Baseline

- Search Console ownership: Verified by permanent HTML file.
- Sitemap submission: Accepted by Search Console on 2026-10-06.
- Initial sitemap processing status: `Couldn't fetch` / `Sitemap could not be read`.
- Independent sitemap test: valid XML, 40 URLs, `application/xml`, HTTP 200 for normal and Googlebot user agents.
- Indexed page count: Pending authenticated Search Console refresh.
- Search impressions, clicks, CTR, and average position: Pending Search Console processing.

Do not repeatedly resubmit the sitemap. Recheck after Google has had time to process it. If the read error persists beyond 48 hours, inspect server/CDN logs and test the sitemap through Search Console again before changing the sitemap implementation.

## Measurement Baseline

Production events implemented:

- `calculator_started`
- `calculator_completed`
- `pricing_viewed`
- `pricing_calculator_use`
- `pricing_calculator_quote_click`
- `cta_clicked`
- `whatsapp_clicked`
- `demo_requested`
- `trial_started`

`lead_submitted` is intentionally not emitted because the website does not yet contain a genuine lead form. Do not count CTA clicks as lead submissions.

Measurement limitation:

- The current GA4 property is named `Logic-Unit` and its only visible web stream is configured for `https://logic-unit.com`.
- Realtime reporting contains multiple Logic Unit websites, so property-level traffic is not a trustworthy AnimalCare360-only baseline.
- Use hostname filtering for interim analysis. A dedicated AnimalCare360 GA4 property remains the recommended long-term measurement design.
- The current GTM container is loading and will remain in place unless evidence shows that it is failing.

## Priority Indexing Queue

Request indexing through URL Inspection in this order:

1. https://www.animalcare360.com/
2. https://www.animalcare360.com/cattle-fattening-software
3. https://www.animalcare360.com/cattle-fattening-profit-calculator
4. https://www.animalcare360.com/solutions/cattlepro
5. https://www.animalcare360.com/solutions/cattle-management
6. https://www.animalcare360.com/pricing
7. https://www.animalcare360.com/demo
8. https://www.animalcare360.com/customers

Record the result of each request as `requested`, `already indexed`, `blocked`, or `quota reached`.

## Seven-Day Validation Targets

| Metric | Baseline | Day-7 target |
| --- | ---: | ---: |
| Sitemap readable by Google | Pending | Success |
| Priority URLs inspected | 0/8 | 8/8 |
| Priority URLs indexed | Pending | Establish actual count |
| Broken internal destinations | 0 | 0 |
| Calculator completion tracking | Implemented | Confirmed in GA4 |
| Demo request tracking | Implemented | Confirmed in GA4 |
| WhatsApp click tracking | Implemented | Confirmed in GA4 |
| Clarity sessions | Pending | Confirmed on desktop and mobile |
| Qualified website leads | Unknown | Establish actual count |

## Decision Rules

- Do not redesign the website during the validation window unless a severe usability or conversion defect is found.
- Do not judge SEO from traffic during the first week.
- Do not publish thin articles to increase URL count.
- Do not report shared GA4 property totals as AnimalCare360 performance.
- Prioritize calculator use, demo requests, WhatsApp conversations, trials, and qualified farms over pageviews.

## Next Checkpoints

- 2026-10-07 to 2026-10-08: Recheck sitemap processing.
- 2026-10-08: Confirm priority URL inspection status and Clarity sessions.
- 2026-10-13: Record the first seven-day acquisition and conversion baseline.
- 2026-11-05: Complete the first 30-day marketing review.
