# crezca-landing-page

Marketing site and waitlist for Crezca, a financial analysis product for the
Colombian stock market. Next.js, TypeScript and Tailwind, deployed on Vercel.

Status: live. Source published so it can be read.

## What is here

The page layout was scaffolded with v0 and then rebuilt around a waitlist that
had to actually work. What followed the scaffold is the part worth reading:

- `app/api/waitlist/route.ts` validates the signup, writes it to Supabase with
  the service role key held server-side, and sends a welcome message through
  Resend. The email is best-effort: a Resend failure does not lose the signup.
- `components/exit-intent.tsx` arms itself after a delay, fires when the
  pointer leaves the top of the viewport, and records the fact in
  `sessionStorage` so a visitor sees it once rather than on every scroll back.
- `app/layout.tsx` sets Open Graph metadata and per-route icons, with Vercel
  Analytics and Speed Insights wired in.
- `app/sitemap.ts` and `app/robots.ts` are Next.js metadata routes rather than
  static files in `public/`.

## Running it

```bash
pnpm install
cp .env.example .env.local   # Supabase URL, service role key, Resend API key
pnpm dev
```

## Licence

None. The code is published so it can be read. Crezca brand assets, copy and
imagery are not licensed for reuse.
