# Job Pack Landing Page

A conversion-focused single-page website for the Job Pack service, built with Next.js (App Router) and Tailwind CSS.

## Features

- Mobile-first, responsive design
- All sections: Hero, Deliverables, How It Works, Pricing (3 tiers), Boundaries, FAQ, Final CTA
- Clean, fast-loading page
- No database, no auth required

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd job-pack
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Configuration

### Payment & Intake Links

Edit `src/app/page.tsx` and replace the placeholder constants at the top of the file:

```tsx
// Replace these with your actual links
const PAYPAL_LINK = "https://paypal.me/yourlink";  // or Stripe checkout URL
const INTAKE_FORM_LINK = "https://forms.google.com/your-form";
const CONTACT_EMAIL = "hello@yourdomain.com";
```

## Deploy to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd job-pack
   vercel
   ```

3. Follow the prompts. For production:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration (Recommended)

1. Push this project to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel auto-detects Next.js — click "Deploy"

6. Your site will be live at `your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to your project → Settings → Domains

2. Add your custom domain and follow DNS instructions

## Project Structure

```
job-pack/
├── src/
│   └── app/
│       ├── globals.css    # Tailwind imports + base styles
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Main landing page (edit links here)
├── tailwind.config.ts     # Tailwind configuration
├── next.config.ts         # Next.js configuration
├── package.json
└── README.md
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the primary color palette
- **Content**: All copy is in `src/app/page.tsx` — easy to update
- **Fonts**: Using Inter via Google Fonts (configured in `layout.tsx`)

## License

MIT
