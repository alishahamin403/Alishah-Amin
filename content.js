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
      status: "Coming soon to the App Store",
      featured: true,
      // Styled like the Seline website: Seline's colours, Geist type, live app footage and a wall of screens.
      theme: "seline",
      tagline: "Ask your day",
      taglineTail: "anything.",
      description:
        "One app for your email, money, places and health. Ask it anything and it answers from what it has already read. Then it handles the busywork: it signs in to pull your bank statements, watches your bills, and logs a meal or a workout from one line.",
      stack: ["SwiftUI", "Supabase", "Edge Functions", "OpenAI", "Gemini", "WebKit agent", "HealthKit", "MapKit", "WidgetKit", "Vision"],
      link: "https://seline-website-three.vercel.app/",
      linkLabel: "seline-website-three.vercel.app",
      icon: "assets/img/seline-icon.webp",
      phones: [
        { src: "assets/img/seline-needs.webp", alt: "Seline's Needs you feed flagging a bill that went up" },
        {
          src: "assets/img/seline-ask.webp",
          video: "assets/video/seline-ask.mp4",
          alt: "Screen recording of Seline answering what the user bought on Amazon this month"
        },
        { src: "assets/img/seline-places.webp", alt: "Seline suggesting coffee near the office on a map" }
      ],
      wall: [
        ["home", "Home with a Needs you card"], ["money", "Spending by category"], ["bank", "Browser agent pulling bank statements"],
        ["fitness", "Fitness and fuel"], ["journal", "Auto-written daily journal"], ["places-map", "Places map"],
        ["meal", "Meal logged from one line"], ["needs", "Needs you feed"], ["ramen", "Remembered restaurant visit"],
        ["workout", "Workout logged from one line"], ["rules", "Rules Seline follows"], ["sleep", "Sleep stages"],
        ["lease", "Answer from a lease email"], ["home-visit", "Place visit details"], ["bill", "Bill check in the browser"]
      ].map(function (s) { return { src: "assets/img/seline-wall/" + s[0] + ".webp", alt: s[1] }; }),
      caseStudy: {
        problem:
          "Daily life is spread across a dozen apps: inbox, bank, bills, calendar, health, notes. Nothing connects them, so simple questions like “where did my money go this month?” or “what was that ramen place with Sam?” have no single answer, and the chores (downloading statements, checking bills) stay manual.",
        build:
          "A native SwiftUI app on a Supabase backend, with Edge Functions for Gmail push, scheduled tasks and an AI proxy. It answers from the user's email, money, places and health data using OpenAI and Gemini models. A WebKit browser agent signs in to sites the user names, asks for the 2FA code and fetches statements. Rules like “check my bill 3 days before it's due” run on a schedule. It also includes HealthKit sleep and fitness, automatic place visits, one-line meal and workout logging, receipt scanning with Vision, an auto-written daily journal and home-screen widgets.",
        role: "Product, UX design and full-stack iOS build",
        outcome:
          "About 3,000 commits in, with a marketing site and launch film. It's coming soon to the App Store and was designed privacy-first: contacts stay on the phone, only the last four digits of account numbers are stored, every action can be undone, and signing out wipes everything."
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
      id: "anushka",
      title: "Anushka Closet",
      kind: "E-commerce store",
      status: "Live",
      tagline: "Timeless style. Elegant you.",
      description:
        "An online store for a Scarborough boutique selling salwar kameez, sarees, clutches and jewelry. Customers browse by category, pick a size (or custom measurements), check out with Stripe and get a branded order confirmation by email.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Stripe Checkout", "Stripe webhooks", "Auth.js (Google)", "Resend", "Tailwind 4"],
      link: "https://anushka-closet.vercel.app/",
      linkLabel: "anushka-closet.vercel.app",
      icon: "assets/img/anushka-logo.webp",
      shots: { light: "assets/img/anushka.webp", dark: "assets/img/anushka.webp" },
      caseStudy: {
        problem:
          "A Scarborough boutique rebranding from Classic Closet to Anushka Closet was sharing new pieces by text and on Facebook. It needed a real storefront where customers could browse, choose sizes and pay online.",
        build:
          "A Next.js storefront with category pages, search and filters, stock and “new” badges, a lookbook, a slide-over bag and made-to-order “Custom” sizing with a measurements note. Checkout runs on Stripe, and a Stripe webhook sends a branded order confirmation through Resend. Customers can sign in with Google or check out as a guest. It also includes a branded 404 page, privacy and terms pages, and accessible (WCAG AA) text contrast.",
        role: "Design, e-commerce build and launch",
        outcome: "A live store with online payments and automatic order emails, with a mobile layout (slide-in menu, sticky add-to-bag) for customers shopping on their phones."
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
