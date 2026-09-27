window.PORTFOLIO_DATA = {
  identity: {
    fullName: "Ali Shah Amin",
    initials: "ASA",
    role: "Product Manager & Builder",
    location: "Toronto, Canada",
    timezone: "America/Toronto",
    availability: "Booking freelance projects for Q4 2026",
    email: "alishah.amin96@gmail.com",
    linkedin: "https://www.linkedin.com/in/alishah-amin/",
    github: "https://github.com/alishahamin403",
    // Add your Upwork profile URL here once it's live and it will appear in the contact section.
    upwork: null,
    booking: "https://calendar.app.google/cWuoHbffiUtKMDxv8",
    bookingEmbed:
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0-QIwyBIS52Nqy0kehODS5hDRlxoUhP0y8zCEO8WM0-6vCNgL0VvGItx1afUyUkqWRAIdTCf5L?gv=true"
  },

  stats: [
    { value: "7+", label: "years leading product & delivery" },
    { value: "~3k", label: "commits shipping Seline, my iOS app" },
    { value: "4", label: "products live on the web today" },
    { value: "1", label: "person from scope to launch, no handoffs" }
  ],

  stack: [
    "SwiftUI", "Next.js", "Supabase", "TypeScript", "Postgres", "Stripe",
    "Vercel", "WidgetKit", "Tailwind", "OpenAI", "Gemini", "Claude", "Playwright", "MapKit"
  ],

  projects: [
    {
      id: "seline",
      title: "Seline",
      kind: "iOS app",
      status: "In active development",
      featured: true,
      tagline: "Your life, in context.",
      description:
        "A personal intelligence app for iOS. Email, calendar, receipts, notes, journaling, places and people in one dashboard, with an AI assistant that answers questions from your own data.",
      stack: ["SwiftUI", "WidgetKit", "Supabase", "Edge Functions", "Gemini", "OpenAI Realtime", "MapKit", "EventKit"],
      link: "https://seline-website-three.vercel.app/",
      linkLabel: "seline-website-three.vercel.app",
      icon: "assets/img/seline-icon.webp",
      phones: ["seline-menu", "seline-home", "seline-chat"],
      caseStudy: {
        problem:
          "Daily life is spread across a dozen apps: inbox, calendar, banking, receipts, notes. Nothing connects them, so simple questions like “what did I spend on dinners last month?” or “when did I last see Sam?” have no single answer.",
        build:
          "Designed and built a native SwiftUI app with a Supabase backend for auth, sync and storage. It integrates Gmail, Google Contacts, Calendar and live location, and includes home-screen widgets, a voice mode on OpenAI Realtime, and grounded AI chat that retrieves answers from the user's own notes, visits, receipts and emails.",
        role: "Product, UX design and full-stack iOS build",
        outcome:
          "Roughly 3,000 commits of iteration so far, with a full design system, performance audits and a marketing site. It's in active development."
      }
    },
    {
      id: "craft",
      title: "Craft",
      kind: "AI web app",
      status: "Live",
      tagline: "Turn images into cinematic video.",
      description:
        "Upload one product photo, describe the motion, and get a short cinematic video, saved to a private library. Built for fashion sellers creating short-form product content.",
      stack: ["Next.js", "TypeScript", "Supabase Storage", "Replicate", "fal.ai", "Google OAuth", "Playwright"],
      link: "https://craft-swart-six.vercel.app/",
      linkLabel: "craft-swart-six.vercel.app",
      shots: { light: "assets/img/craft-light.webp", dark: "assets/img/craft-dark.webp" },
      caseStudy: {
        problem:
          "Small fashion brands need video for Reels and TikTok but don't have a studio, an editor or time to learn AI video tools.",
        build:
          "Next.js App Router app with Google sign-in on signed HTTP-only sessions, private Supabase Storage for uploads and outputs, and a routing layer that sends each job to the right image-to-video model on Replicate or fal.ai. Covered by Vitest unit tests and Playwright end-to-end tests.",
        role: "Product, design and full-stack build",
        outcome: "Live web app that goes from one photo to a finished clip in a few clicks."
      }
    },
    {
      id: "awaz",
      title: "Awaz",
      kind: "Web platform",
      status: "Live",
      tagline: "A quiet place to study scripture.",
      description:
        "Read the Quran, Torah, Bible and Bhagavad Gita side by side. Highlight a passage to surface parallels across traditions, save notes, and ask questions in plain language.",
      stack: ["Next.js", "React 19", "Tailwind 4", "Supabase Auth", "LLM Q&A"],
      link: "https://awaz-drab.vercel.app/",
      linkLabel: "awaz-drab.vercel.app",
      icon: "assets/img/awaz-icon.svg",
      shots: { light: "assets/img/awaz-light.webp", dark: "assets/img/awaz-dark.webp" },
      caseStudy: {
        problem:
          "People curious about how religious texts relate to each other jump between scattered sites and search results, and lose context every time.",
        build:
          "A calm reading environment with original-language text plus English, highlight-to-compare for direct and thematic parallels, saved passages and notes behind Supabase auth, and an “Ask Awaz” assistant that answers and points to the relevant pages.",
        role: "Product concept, content architecture and full-stack build",
        outcome: "Live platform for side-by-side comparative study."
      }
    },
    {
      id: "royalty",
      title: "Royalty Home Inc.",
      kind: "Marketing site",
      status: "Live",
      tagline: "Luxury renovations across the GTA.",
      description:
        "A premium marketing site for a Toronto renovation studio, designed to build trust quickly and turn visitors into quote requests.",
      stack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://royalty-home-inc-steel.vercel.app/",
      linkLabel: "royalty-home-inc-steel.vercel.app",
      icon: "assets/img/royalty-logo.webp",
      shots: { light: "assets/img/royalty.webp", dark: "assets/img/royalty.webp" },
      caseStudy: {
        problem:
          "Renovation clients hire on trust. The studio needed to look as premium as its work and make getting a quote effortless.",
        build:
          "A fast, dependency-free static site with editorial typography, full-bleed project imagery, clear service framing and quote CTAs throughout.",
        role: "Brand presentation, copy and build",
        outcome: "A lightweight static site with no framework overhead, so it loads fast on mobile."
      }
    },
    {
      id: "lockerzero",
      title: "Locker Zero",
      kind: "Landing page",
      status: "Live",
      tagline: "Website mockups in 24 hours.",
      description:
        "A landing page for a web design service: send in an idea and get a first designed mockup within a day, followed by the full build.",
      stack: ["HTML", "CSS", "Light/dark theming", "Vercel"],
      link: "https://locker-zero.vercel.app/",
      linkLabel: "locker-zero.vercel.app",
      icon: "assets/img/locker-zero-logo.svg",
      shots: { light: "assets/img/lockerzero-light.webp", dark: "assets/img/lockerzero-dark.webp" },
      caseStudy: {
        problem:
          "Founders lose momentum between having an idea and seeing it. Most agencies take weeks to show anything.",
        build:
          "A bold editorial landing page with device mockups, a clear process section and a structured brief form that captures everything needed to start designing.",
        role: "Positioning, design and build",
        outcome: "Live site that turns a vague idea into a usable brief."
      }
    }
  ],

  services: [
    {
      title: "iOS apps",
      summary: "Native SwiftUI apps, new features, widgets and fixes, taken through TestFlight to the App Store.",
      items: ["SwiftUI & WidgetKit", "Maps, location & calendar", "Sign in with Google/Apple", "App Store prep"]
    },
    {
      title: "Web apps & sites",
      summary: "Fast marketing sites, dashboards and SaaS MVPs in Next.js, deployed on Vercel.",
      items: ["Next.js & React", "Landing pages that convert", "Stripe payments", "Analytics & SEO"]
    },
    {
      title: "Supabase backends",
      summary: "Solid data foundations: schema, auth, row-level security, storage and edge functions.",
      items: ["Postgres schema design", "Auth & RLS policies", "Storage & file uploads", "Edge functions & cron"]
    },
    {
      title: "AI features",
      summary: "Useful AI features, not demos. Assistants grounded in your data, automations and media generation.",
      items: ["Chat over your docs & data", "LLM workflows & tools", "Voice (realtime) modes", "Image & video generation"]
    }
  ],

  process: [
    { title: "Intro call", text: "A free 30-minute call. We talk about the goal and who it's for, not only the feature list." },
    { title: "Written scope", text: "A short plan with milestones, a timeline and a fixed quote where possible. No surprises." },
    { title: "Build in the open", text: "You get live preview links at every milestone and regular updates, so you always know where things stand." },
    { title: "Handoff", text: "Deployed, documented code in your own repo, plus a walkthrough so your team owns it." }
  ],

  career: [
    {
      role: "Senior Product Manager",
      company: "RBC Borealis",
      period: "2025 — Now",
      description: "Lead the Data Hubs product team across strategy, go-to-market and UX for enterprise data products on-prem and in the cloud."
    },
    {
      role: "Manager, Delivery & Strategy",
      company: "RBC",
      period: "2022 — 2025",
      description: "Ran strategy and delivery for two Advanced Analytics product teams. Built the framework linking OKRs to day-to-day work."
    },
    {
      role: "Product Manager, Digital Marketing & Sales",
      company: "RBC",
      period: "2021 — 2022",
      description: "Data strategy and go-to-market for the OnePATH data product and DevOps initiatives in Personal Banking."
    },
    {
      role: "Product Analyst",
      company: "WSIB",
      period: "2019 — 2021",
      description: "Health Services app that centralized policy and service information, so users could find trusted answers in the app."
    },
    {
      role: "Business Analyst",
      company: "Innovapost",
      period: "2018 — 2019",
      description: "Requirements for the Disability Accommodation Program on canadapost.ca."
    }
  ],

  credentials: [
    { name: "Master of Management Analytics", issuer: "Queen's University, Smith School of Business", year: "2024" },
    { name: "BCom, Business Technology Management", issuer: "Toronto Metropolitan University", year: "2018" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2021" },
    { name: "CAPM", issuer: "Project Management Institute", year: "2019" }
  ],

  offDuty: [
    "Gym every day. Strength training keeps my head clear.",
    "Theo and ThePrimeTime for tech news; Lex Fridman and All-In for long drives.",
    "A committed local-pizza loyalist. JP's Pizzeria, if you're asking."
  ]
};
