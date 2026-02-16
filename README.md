# Lucas Bhatia — Portfolio & Progress Tracker

A beautiful, public-facing portfolio website showcasing **5 ambitious projects** in real-time. Scan a QR code and see what's shipping, what's next, and how to get involved.

## 🎯 Overview

This is Lucas Bhatia's public project tracker — a single-page application built with **pure HTML/CSS/JavaScript** that displays:

- **5 Active Projects** with live progress tracking
- **Project Roadmaps** with completed, in-progress, and planned milestones
- **Tech Stack Badges** for each technology used
- **Changelog/Recent Updates** showing what shipped
- **Distribution Plans** (App Store, Chrome Web Store, Vercel, Railway, etc.)
- **Get Involved CTAs** (GitHub, early access, hire links)
- **Embedded QR Code** that links to `https://lucasbhatia.dev`

## 📦 Projects Included

1. **IOSTrade** — Algorithmic Trading Platform (78% complete)
2. **SlipEdge** — Sports Betting Analytics (72% complete)
3. **CB Service Broker** — Customs Brokerage Portal (85% complete)
4. **StudyBot** — AI Study Tool (15% complete, new)
5. **AI Agent Orchestration** — Multi-agent system (90% complete)

## 🎨 Design Features

- **Dark Theme** — Charcoal background (#0a0a0a) with Electric Blue accents (#3B82F6)
- **Glassmorphism** — Frosted glass cards with blur effects
- **Smooth Animations** — Fade-ins, slide-downs, and hover animations
- **Progress Bars** — Animated progress visualization
- **Timeline** — Interactive roadmap with milestone states
- **Responsive** — Mobile-first design, perfect for QR code scanning
- **Font** — Inter (Google Fonts) for clean, modern typography

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, flexbox, grid, animations
- **JavaScript (Vanilla)** — No frameworks, ~300 lines of logic
- **Chart.js** — (Optional, ready for integration)
- **QR Code Library** — qrcode.js from CDN
- **Google Fonts** — Inter typeface

## 🚀 Getting Started

### Local Testing

```bash
# Navigate to the project directory
cd ~/projects/portfolio-tracker

# Serve locally (Python 3)
python3 -m http.server 8080

# Or with Node.js
npx http-server -p 8080

# Open in browser
open http://localhost:8080
```

The embedded QR code will dynamically generate for local testing (`http://localhost:8080`).

### File Structure

```
portfolio-tracker/
├── index.html              # Main single-page app
├── qr-code.png            # QR code to https://lucasbhatia.dev
├── qr-code-localhost.png  # QR code to http://localhost:8080 (testing)
├── generate-qr.js         # QR code generator script
├── package.json           # NPM dependencies
└── README.md             # This file
```

## 🎯 Features

### Landing Page
- Header with bio and intro
- Stats bar (5 projects, 76% avg completion, AI agents, daily updates)
- Embedded QR code in header

### Project Cards
- Project title, subtitle, and status badge
- Live progress bar with percentage
- Tech stack pills
- Quick stats (strategies, tests, users, etc.)
- View Code / Learn More buttons

### Project Detail Modal
- Full tech stack
- ✓ What's Done section
- → What's Next section
- 📅 Roadmap with milestones (completed, in-progress, planned)
- 📝 Recent Updates/Changelog
- 📦 Distribution channels
- 🚀 Get Involved (GitHub, early access, hire)

### Footer
- Quick links (GitHub, LinkedIn, Email, Upwork)
- "Built with AI Agents" badge
- Last updated timestamp

## 📝 Customization

All project data is in a simple JavaScript object:

```javascript
const projects = [
    {
        id: 1,
        title: 'Project Name',
        status: 'Beta',
        progress: 75,
        tech: ['Tech1', 'Tech2'],
        // ... more fields
    }
];
```

To update:
1. Edit the `projects` array in `index.html`
2. Update roadmaps, changelogs, team info, etc.
3. Regenerate QR code if URL changes: `node generate-qr.js`

## 🔗 QR Codes

Two QR codes are pre-generated:

- **qr-code.png** → `https://lucasbhatia.dev` (production)
- **qr-code-localhost.png** → `http://localhost:8080` (testing)

To regenerate with a new URL, edit `generate-qr.js` and run:

```bash
npm install qrcode  # One-time setup
node generate-qr.js
```

## 📱 Responsive Design

- **Desktop** — 4-column grid, full-width layout
- **Tablet** — 2-3 columns
- **Mobile** — Single column, optimized for QR scanning
- All animations and hover effects work across devices

## 🎬 Animations

- **Page Load** — Staggered fade-ins (header, stats, projects)
- **Cards** — Lift and glow on hover
- **Progress Bars** — Animated fill on load
- **Milestones** — Pulse effect for in-progress items
- **Modals** — Smooth fade-in and slide-up

## 📊 Performance

- Single HTML file (~45KB)
- Pure CSS (no Tailwind/Bootstrap bloat)
- Minimal JavaScript (vanilla, no jQuery)
- CDN-hosted libraries (qrcode.js, Google Fonts)
- No build process required

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel
```

### GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/lucasbhatia/portfolio-tracker.git
git push -u origin main
```

Then enable Pages in GitHub settings.

### Other Platforms

- **Netlify** — Drag & drop `index.html`
- **Railway** — Zero config deployment
- **Cloudflare Pages** — Direct GitHub integration

## 📈 Future Enhancements

- [ ] Chart.js integration for project stats
- [ ] Dark/Light mode toggle
- [ ] Email signup for "Get Early Access"
- [ ] Blog integration
- [ ] Analytics dashboard
- [ ] Discord/Slack notifications for updates
- [ ] Real-time data sync (headless CMS)

## 📄 License

MIT — Feel free to fork and customize!

---

**Built with AI Agents** 🤖

Last updated: February 16, 2026
