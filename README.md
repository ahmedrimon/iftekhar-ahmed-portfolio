# Iftekhar Ahmed — Portfolio

A minimal, editorial-style portfolio inspired by [offmenu.design](https://www.offmenu.design/), built with **React**, **GSAP**, and **Tailwind CSS**.

---

## Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| GSAP 3 + ScrollTrigger | All animations |
| Lenis | Smooth scroll |
| Tailwind CSS 3 | Styling |
| DM Sans + Playfair Display | Typography |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with scroll state
│   ├── Hero.jsx         # Full-screen hero with GSAP stagger reveal
│   ├── Projects.jsx     # Project list with hover previews
│   ├── Skills.jsx       # Skill bars with scroll-triggered fills
│   ├── About.jsx        # Bio + experience timeline
│   ├── Contact.jsx      # Contact form + links
│   ├── Footer.jsx       # Minimal footer
│   └── Cursor.jsx       # Custom magnetic cursor
├── data/
│   └── index.js         # Projects, skills, experience data
├── App.jsx              # Root + Lenis smooth scroll setup
├── main.jsx             # React entry point
└── index.css            # Tailwind + global styles
```

---

## Customising

### Update your info
Edit `src/data/index.js` — change project names, descriptions, tags, years, and skill levels.

### Change colours
Edit `tailwind.config.js` colors and `src/index.css` `:root` variables:
- `--paper` — background
- `--ink` — primary text/dark
- `--muted` — secondary text
- `--accent` — accent

### Add project images
In `Projects.jsx`, replace `<ProjectPreview>` with an actual `<img>` tag pointing to your project screenshots:

```jsx
<img
  src="/images/your-project.jpg"
  alt="Project name"
  className="w-full h-full object-cover"
/>
```

### GSAP animations
All animations live inside `useEffect` + `gsap.context()` calls per component. Tweak `duration`, `ease`, `stagger`, and `ScrollTrigger` `start` values freely.

---

## Deployment

```bash
npm run build
# Outputs to /dist — deploy to Vercel, Netlify, or any static host
```

For Vercel: just `vercel --prod` from the project root.

---

## Design Credits

Aesthetic inspired by [offmenu.design](https://www.offmenu.design/) — minimal, editorial, typographically-led.
