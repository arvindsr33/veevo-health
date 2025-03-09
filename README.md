# Veevo Health Website

A Next.js website for Veevo Health, a longevity company focused on heart health assessments to help people live longer.

## Features

- Statically generated website with Incremental Static Regeneration (ISR)
- Bilingual support (English and Spanish)
- Responsive design with Tailwind CSS
- SEO optimized with meta tags, structured data, sitemap, and robots.txt
- Performance optimized with image optimization and analytics
- Waitlist signup form with payment integration
- PWA support with manifest.json

## Tech Stack

- Next.js 15
- Tailwind CSS
- TypeScript
- Stripe for payment processing

## Project Structure

```
veevo-health/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   ├── es/               # Spanish pages
│   ├── waitlist/         # Waitlist pages
│   ├── layout.jsx        # Root layout
│   ├── page.jsx          # Homepage
│   ├── loading.jsx       # Loading state
│   ├── not-found.jsx     # 404 page
│   ├── sitemap.js        # Sitemap generator
│   ├── robots.js         # Robots.txt generator
│   └── manifest.js       # Web manifest generator
├── components/           # Reusable components
├── lib/                  # Utility functions
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/veevo-health.git
   cd veevo-health
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_BASE_URL=https://veevo.health
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Deployment

The website can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Import the repository to Vercel.
3. Configure the environment variables.
4. Deploy the website.

## Internationalization

The website supports English and Spanish languages. The language is automatically detected based on the user's browser settings, but can also be changed manually using the language switcher in the header.

## SEO

The website is optimized for search engines with:

- Meta tags for each page
- Structured data for rich snippets
- Sitemap.xml for search engine crawling
- Robots.txt for search engine indexing
- Canonical URLs for each page

## Performance

The website is optimized for performance with:

- Incremental Static Regeneration (ISR) for efficient rebuilds
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minification and compression

## Analytics

The website includes analytics tracking with Google Analytics. The analytics code is only loaded in production mode.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries, please contact:

- Email: arvind@veevo.health
- LinkedIn: [Arvind Srivastav](https://linkedin.com/in/arvind-srivastav)
