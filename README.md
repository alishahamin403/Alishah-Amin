# Ali Shah Amin

Static personal portfolio and freelance site for Ali Shah Amin. Live at https://alishah-amin.vercel.app/

## Stack

- Static HTML, CSS and vanilla JavaScript (no build step)
- Content lives in `content.js` (projects, services, process, career). Edit it there and the page re-renders.
- Uses modern browser features with graceful fallbacks: View Transitions (theme switch), scroll-driven animations, `<dialog>` with `@starting-style`, `color-mix()`.

## Editing content

- **Add your Upwork link:** set `identity.upwork` in `content.js`. It appears in the contact section automatically.
- **Availability banner:** `identity.availability`.
- **Projects:** add an entry to `projects`. Screenshots go in `assets/img/` as WebP (about 1440px wide).
- After changing CSS/JS, bump the `?v=` query strings in `index.html` so browsers pick up the new files.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Public repo note

This repository is published as a portfolio artifact. Local machine settings and any private credentials are intentionally excluded.
