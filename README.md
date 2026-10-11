# Pandit Kailash --- Astrology & Psychic Readings

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES-323330?logo=javascript&logoColor=F7DF1E)
![Tailwind
CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer
Motion](https://img.shields.io/badge/Framer_Motion-Animations-7812FA?logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scrolling-1E293B)

A responsive website for **Pandit Kailash**, presenting astrology and
psychic reading services and helping visitors enquire about
consultations across the United Kingdom.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages and Routes](#pages-and-routes)
- [Assets and Videos](#assets-and-videos)
- [Environment Variables](#environment-variables)
- [Production Build and Deployment](#production-build-and-deployment)
- [SEO and Accessibility](#seo-and-accessibility)
- [Credits](#credits)
- [License](#license)

## Overview

The website introduces Pandit Kailash's astrology and psychic reading
services, including Vedic astrology, palmistry, horoscope and
birth-chart guidance, relationship compatibility, and career-oriented
consultations. Visitors can explore reading details, view promotional
videos and gallery imagery, and contact the business about consultations
in London, Manchester, Birmingham, and elsewhere in the UK.

## Features

- Responsive navigation and layouts for mobile, tablet, and desktop.
- Homepage with hero content and service highlights.
- Individual reading detail pages driven by shared service data.
- Psychic readings and personal guidance.
- Love and relationship readings.
- Palm reading.
- Horoscope and birth-chart readings.
- Marriage and compatibility guidance.
- Career and life readings.
- Promotional video section using locally hosted media.
- Image gallery with an enlarged-image viewer.
- Location information for London, Manchester, and Birmingham.
- Contact page with enquiry form and WhatsApp links.
- Floating WhatsApp contact button with pre-filled messages.
- Smooth scrolling with Lenis and interface animations with Framer
  Motion.
- SEO and social-sharing metadata.
- Custom not-found page.

## Technology Stack

---

Technology Purpose

---

[Next.js](https://nextjs.org/) App Router, routing, layouts,
metadata, and application rendering

[React](https://react.dev/) Component-based user interface

JavaScript Application language

[Tailwind CSS](https://tailwindcss.com/) Utility-first styling

[Framer Motion](https://motion.dev/) UI and scroll-triggered animations

[Lenis](https://lenis.darkroom.engineering/) Smooth scrolling

[Lucide React](https://lucide.dev/) Interface icons

[React Brand and social-media icons
Icons](https://react-icons.github.io/react-icons/)

---

Refer to `package.json` for the exact installed package versions.

## Project Structure

```text
.
├── public/
│   ├── logo/                    # Brand logo assets
│   ├── images/
│   │   ├── about/               # About-page imagery
│   │   ├── certificates/        # Certificate images
│   │   ├── gallery/             # Gallery images, if present
│   │   ├── home/                # Homepage, location, review, and CTA assets
│   │   └── services/            # Reading-service images and related media
│   └── videos/                  # Promotional videos
├── src/
│   ├── app/
│   │   ├── layout.jsx           # Root layout, fonts, metadata, shared layout
│   │   ├── page.jsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   ├── not-found.jsx        # Custom 404 page
│   │   ├── about/page.jsx       # About page
│   │   ├── contact/page.jsx     # Contact and enquiry page
│   │   ├── locations/page.jsx   # Locations page
│   │   ├── services/page.jsx    # Services overview
│   │   └── readings/[slug]/page.jsx
│   │                             # Dynamic reading-detail route
│   ├── components/
│   │   ├── common/              # Shared UI, WhatsApp, smooth scrolling
│   │   ├── home/                # Homepage sections
│   │   ├── layout/              # Navbar and footer
│   │   └── readings/            # Reading-detail components
│   ├── data/
│   │   └── readingServices.js   # Reading content and route data
│   └── lib/                     # Shared utilities and configuration
├── package.json
├── next.config.mjs
├── eslint.config.mjs
└── jsconfig.json
```

The tree above highlights the main application areas. Exact filenames
and optional asset folders may vary as the project evolves.

## Getting Started

### Prerequisites

- Node.js compatible with the version supported by the installed
  Next.js release.
- npm.

### Install dependencies

From the project directory, run:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open <http://localhost:3000> in your browser.

## Available Scripts

The project typically uses the following npm scripts. Check
`package.json` for the exact scripts configured in your working copy.

Command Purpose

---

`npm run dev` Start the development server
`npm run build` Create a production build
`npm run start` Run the production server
`npm run lint` Run lint checks, if configured

## Pages and Routes

---

Route Description

---

`/` Homepage and featured sections

`/about` About Pandit Kailash

`/services` Overview of available readings

`/readings/psychic-reading` Psychic reading details

`/readings/love-relationships` Love and relationship reading
details

`/readings/palm-reading` Palm reading details

`/readings/horoscope-birth-chart` Horoscope and birth-chart details

`/readings/marriage-compatibility` Marriage and compatibility details

`/readings/career-life` Career and life reading details

`/locations` Location and service-area
information

`/contact` Contact options and enquiry form

---

Unknown routes are handled by the custom not-found page.

## Assets and Videos

Static assets are stored in the `public/` directory and can be
referenced by root-relative paths.

- `public/logo/` --- logo assets.
- `public/images/about/` --- about-page images.
- `public/images/certificates/` --- certificate images.
- `public/images/home/` --- homepage, locations, reviews, and CTA
  assets.
- `public/images/services/` --- service-related images.
- `public/images/gallery/` --- gallery images, if present.
- `public/videos/` --- promotional videos.

For example, `public/videos/astro-1.mp4` is referenced in the
application as `/videos/astro-1.mp4`. Ensure that filenames and letter
casing match exactly, especially when deploying to a case-sensitive
environment. Browser support can vary by video container and codec; MP4
with H.264 video and AAC audio is a widely compatible choice.

## Environment Variables

Review the application code before deployment to determine whether
environment variables are required. Do not commit secrets, access
tokens, or private credentials to source control. If configuration is
later moved to environment variables, document the variable names in an
example file without adding real values.

## Production Build and Deployment

Build the application locally:

```bash
npm run build
```

If the build succeeds, run the production server:

```bash
npm run start
```

The application can be deployed to a compatible Next.js hosting
platform, including [Vercel](https://vercel.com/). Follow the [official
Next.js deployment
documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for deployment options and configuration details.

Before deploying, verify that all local image and video paths exist and
that the production build completes successfully.

## SEO and Accessibility

The application uses the Next.js App Router metadata system for page
metadata and social-sharing previews. For strong search visibility, keep
titles and descriptions relevant to each page and ensure canonical URLs
use the correct production domain.

Recommended checks before release:

- Confirm page titles and descriptions are unique and accurate.
- Verify Open Graph and social preview images resolve correctly.
- Use descriptive alternative text for meaningful images.
- Keep keyboard focus visible on interactive controls.
- Ensure forms have accessible labels and useful validation feedback.
- Test responsive layouts and reduced-motion behavior.
- Confirm all media has appropriate fallbacks and does not obscure
  controls.

## Credits

- **Website:** Pandit Kailash --- Astrology & Psychic Readings.
- **Development credit:** StaffArc, where displayed by the website's
  footer.

## License

No license file is currently documented here. Unless a license is added
by the project owner, the licensing terms remain unspecified.
