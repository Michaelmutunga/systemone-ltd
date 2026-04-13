# System One Kenya Web

Marketing and product website for System One Ltd, built with Vite, React, TypeScript, Tailwind CSS, and Supabase edge functions.

## What’s in the app

- Public pages for Home, About, Services, Why Choose Us, and Contact
- Product detail pages for CampusCURA, Library Radar, and Hardware Products
- Contact form backed by a Supabase edge function that sends email through Resend
- AI chat edge function for conversational support
- Optional voice assistant integration through Vapi

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Supabase

## Local Setup

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` - start the local dev server
- `npm run build` - create a production build
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build locally

## Environment Variables

Set these in `.env`:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_VAPI_PUBLIC_KEY`
- `VITE_VAPI_ASSISTANT_ID`
- `VITE_GA_MEASUREMENT_ID`
- `VITE_GOOGLE_SITE_VERIFICATION` optional for Google Search Console

Supabase edge functions also expect:

- `RESEND_API_KEY`
- `OPENAI_API_KEY`

## Routes

- `/`
- `/about`
- `/services`
- `/why-choose-us`
- `/contact`
- `/campus-cura`
- `/library-radar`
- `/hardware-products`

## Supabase Functions

- `send-contact-email` handles contact form submissions
- `ai-chat` responds to assistant messages using OpenAI

## Notes

- The site is content-heavy and largely static, so most changes are copy, layout, or conversion-focused.
- Route names now use lowercase kebab-case for consistency.
- The voice assistant and AI chat are optional product features and can be disabled if you want a simpler public site.
