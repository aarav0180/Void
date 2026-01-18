<div align="center">
   <img src="https://i.ibb.co/zhhDrwj0/banner.png" alt="Void Browser Banner" width="1200" />
  <p><em>Silence the noise. Keep the signal.</em></p>
</div>

# Void Browser

Void is a concept browser experience focused on privacy, signal-to-noise filtering, and a cinematic cyber-noir presentation. It strips tracking, popups, and visual clutter, then re-presents only the essentials through immersive animations and storytelling.

## Highlights
- **Cinematic landing** with scroll-driven hero, manifesto, and animated marquees
- **Email capture** backed by Firebase/Firestore (`users` collection with `email` + timestamp)
- **Core architecture grid** (Airlock extraction, local intelligence, minimal toolbar, stripped Chromium render engine)
- **Zero-trust security bento** (context isolation, telemetry spoofing, HTTPS enforcement, clipboard sentinel)
- **Device showcase** with parallax laptop/phone states and “dirty → clean” airlock demo
- **Privacy manifesto** page with axioms and live “no records” query demo
- **Success gateway** confirmation scene after subscribe
- Responsive layout, framer-motion choreography, and Lucide iconography

## Screens
- Hero + CTA → Success gateway
- Manifesto + marquee noise filter
- Core architecture bento grid
- Zero-trust security bento
- Device showcase (laptop + phone)
- Privacy manifesto page

## Tech Stack
- React 19 + TypeScript
- Vite
- framer-motion for animation
- Lucide icons
- Firebase (Firestore) for email capture
- Tailwind-esque utility classes (defined in CSS) for styling

## Project Structure
- [App.tsx](App.tsx): View router (home ↔ success ↔ privacy) and layout shell
- [components/Header.tsx](components/Header.tsx): Sticky nav with scroll-aware chrome and mobile drawer
- [components/Hero.tsx](components/Hero.tsx): Email capture + CTA wired to Firebase `storeEmail`
- [components/Manifesto.tsx](components/Manifesto.tsx): Narrative section with animated type/bridges
- [components/NoiseMarquee.tsx](components/NoiseMarquee.tsx): Scrolling “noise” word marquee
- [components/BentoGrid.tsx](components/BentoGrid.tsx): Core architecture grid + minimalism toggle + render engine card
- [components/ActiveDefenseBento.tsx](components/ActiveDefenseBento.tsx): Zero-trust/security cards (segmentation, spoofing, HTTPS, clipboard)
- [components/DeviceShowcase.tsx](components/DeviceShowcase.tsx): Parallax laptop/phone airlock demo
- [components/PrivacyManifesto.tsx](components/PrivacyManifesto.tsx): Dedicated privacy page with axioms and query demo
- [components/SuccessGateway.tsx](components/SuccessGateway.tsx): Post-subscribe confirmation scene
- [components/Footer.tsx](components/Footer.tsx): Footer links + privacy trigger
- [lib/firebase.ts](lib/firebase.ts): Firebase app + Firestore helpers (`storeEmail`, `getAllEmails`)

## Getting Started

1) Install dependencies
```bash
npm install
```

2) Configure environment (Firebase)
```bash
# .env.local (keep out of git)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3) Run dev server
```bash
npm run dev
```

4) Build for production
```bash
npm run build
```

## Firebase Notes
- Firestore collection: `users`
- Document fields: `email` (string), `timestamp` (Firestore Timestamp), `createdAt` (ISO)
- Writes happen in [components/Hero.tsx](components/Hero.tsx) via `storeEmail`
- Local env uses `.env.local`; deployment should use your host’s env vars (not committed files)

## Deploying
- Add the same `VITE_FIREBASE_*` variables in your hosting provider’s dashboard (Vercel, Netlify, etc.)
- Run a production build (`npm run build`) and serve `dist`

## Interaction Map
- **Subscribe CTA:** Hero form → Firestore write → Success gateway view
- **Privacy Policy:** Footer button → PrivacyManifesto view
- **In-page navigation:** Header buttons scroll to manifesto/features/security anchors
- **Minimalism toggle:** In BentoGrid to show/hide toolbar labels

## Development Tips
- Animations use framer-motion; keep durations/ease consistent when adding sections
- Hero form already handles loading/error states; reuse `storeEmail` for other captures
- Assets: banner served from hosted URL `https://i.ibb.co/zhhDrwj0/banner.png` (update if you change it)

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build output

## License
MIT (feel free to adapt the concept; keep credentials private)<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1rTOKLcNEUTZ6C4D2Ge4infghJJK0DtFJ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
