# NRSgirls.com — Founder Onboarding (Month 1)

This repo contains the early scaffolding for a Chaturbate-class platform with our twist:
- Only female performers
- Two rooms per performer
- A **global DJ audio bus** (live or pre-recorded) perfectly synced for all rooms

## Where to start
- 📘 Month 1 plan: [`/docs/onboarding/month-01/README.md`](docs/onboarding/month-01/README.md)
- ✅ Best practices: [`/docs/best-practices/README.md`](docs/best-practices/README.md)
- ☑️ Checklists (PRs, Security, Release): [`/docs/checklists`](docs/checklists)

## Minimum dev stack
- Node.js LTS + pnpm
- TypeScript + React/Next.js
- PostgreSQL + Prisma
- Redis (presence/pub-sub)
- Docker + GitHub Actions

## Project goals (M1)
- Learn HTML/CSS + TypeScript fundamentals
- Build landing + auth screens in Next.js
- Stand up Postgres + Prisma with Users/Performers/Rooms
- Add WebSocket presence baseline

---

## 📁 About This Repository

This is the special .github repository for the NRSgirls-com organization, serving dual purposes:

- **Organization Profile:** The `profile/README.md` displays on the organization's GitHub page
- **Application Code:** Contains the NRSgirls.com streaming platform (Next.js frontend + Node.js backend)
- **GitHub Templates:** Includes organization-wide issue templates, PR templates, and workflows

## Repository Structure

| Directory | Description |
|-----------|-------------|
| `/profile/` | Organization profile displayed on GitHub |
| `/.github/` | Organization-wide GitHub configuration (issue templates, workflows) |
| `/frontend/` | Next.js application pages and components |
| `/nrsgirls-platform/` | Platform core code and scripts |
| `/docs/` | Technical documentation |
