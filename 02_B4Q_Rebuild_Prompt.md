# Master Prompt: Modern, Premium Rebuild of an ISO Certification Body Website

*Paste everything below the line into your AI builder (Claude, v0, Lovable, Bolt, Cursor, etc.). Replace the `{{PLACEHOLDERS}}` first. It works best alongside Report 01, the page-wise content inventory.*

---

## ROLE
You are a senior product designer and front-end engineer who builds premium B2B websites for compliance, audit and certification firms. Build a complete, production-ready marketing website with a certificate-verification tool for **{{BRAND_NAME}}**, an international ISO certification body and Exemplar Global–authorised training provider with offices in the UK, India, USA and Singapore.

## GOAL
Replace an outdated WordPress/Elementor site with a fast, trustworthy, conversion-focused experience that:
1. Makes a first-time visitor believe within 5 seconds that this is a credible, impartial, internationally operating certification body.
2. Converts two audiences: **companies** that want certification (primary CTA: "Get a Certification Quote") and **individuals** who want auditor training (secondary CTA: "Browse Courses").
3. Makes **certificate verification** a first-class, instant, public tool.
4. Scales cleanly to many standards, courses and country pages without thin or duplicate content.

**Copy rule:** write all copy fresh and original. Use the facts from Report 01 (standards, durations, pass marks, control counts, addresses, team credentials), but do not copy the old site's paragraphs. Tone: confident, precise, plain English, no hype. Never claim certification is "easy, fast or cheap"; that would breach the impartiality policy.

## TECH STACK
- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + Framer Motion + Lucide icons**
- Content in **MDX or a headless CMS** (Sanity or Payload) with typed collections: `Standard`, `Course`, `TeamMember`, `Document`, `Office`, `CountryPage`, `Post`, `FAQ`, `Testimonial`, `ClientLogo`
- Forms: React Hook Form + Zod; submit to an API route (email via Resend) and store leads
- SEO: `next-seo`/Metadata API, JSON-LD (`Organization`, `ProfessionalService`, `Course`, `FAQPage`, `BreadcrumbList`), dynamic sitemap, OG images via `@vercel/og`
- Performance budget: Lighthouse ≥ 95 on every category, LCP < 2.0 s, CLS < 0.05, images via `next/image` (AVIF/WebP)
- Accessibility: WCAG 2.2 AA, full keyboard navigation, visible focus rings, `prefers-reduced-motion` respected

## DESIGN SYSTEM ("Assured Precision")
**Feel:** Swiss-precise, calm, authoritative. Think of a modern audit firm crossed with a fintech: generous whitespace, crisp grids, subtle depth. No stock photos of people pointing at laptops.

| Token | Value |
|---|---|
| Primary / Ink | Deep navy `#0B1B3F` (evolved from the old `#172541`) |
| Accent | Signal coral `#F3525A` (the brand's existing red, refined). Use only for CTAs and key highlights. |
| Trust accent | Verified emerald `#10B981`, used only for verification or "valid" states |
| Surfaces | `#FFFFFF`, `#F7F8FB`, `#EEF1F7`; borders `#E3E7EF` |
| Text | `#0B1B3F` headings, `#475569` body, `#94A3B8` muted |
| Dark mode | Navy `#070F24` background, `#0F1B3A` cards, same accent. Support a full dark theme. |
| Type | Headings: **"Instrument Serif"** or **"Fraunces"** (premium editorial serif, replacing Merriweather). UI/body: **"Inter"** or **"Geist"**. Mono for certificate numbers and clause IDs: **"JetBrains Mono"** |
| Scale | Display 64/72, H1 48, H2 36, H3 24, body 17/28, small 14 |
| Radius | 14px cards, 999px pills/buttons |
| Shadow | Soft layered: `0 1px 2px rgb(11 27 63 / .06), 0 8px 24px rgb(11 27 63 / .06)` |
| Grid | 12-col, 1200px max, 24px gutters, 16px mobile gutters |
| Motif | Thin-line "seal" ring and hairline grid pattern; a small clause-number chip (`§ 8.28`) as a recurring UI element |
| Motion | 200–400 ms ease-out; fade-and-rise reveals, number count-ups, magnetic CTA hover. Nothing gimmicky. |

**Components to build:** Mega-menu, sticky glass header (shrinks on scroll), Pill buttons (primary/secondary/ghost), Standard card, Course card, Stat counter, Logo marquee, Process stepper, Accordion FAQ, Tabs, Comparison table, Team card with credential chips, Document list row with file icon and size, Testimonial carousel, Multi-step quote form, Verification search with result card, Toasts, Breadcrumbs, Sticky mobile CTA bar, WhatsApp button (discreet, bottom-right, doesn't overlap chat), Cookie banner (privacy-first).

## INFORMATION ARCHITECTURE
```
/                               Home
/certification                  Certification hub (all standards)
/certification/[standard]       iso-9001, iso-14001, iso-22000, iso-27001 (2022),
                                iso-27701, iso-45001, iso-20000-1 (+ future: 22301, 37001, 50001)
/certification/process          How certification works (Stage 1 → Stage 2 → decision → surveillance → recert)
/training                       Training hub + filters
/training/lead-auditor          (+ per-standard detail pages /training/lead-auditor/[standard])
/training/internal-auditor
/training/professional          GDPR DPO, Six Sigma Green/Black/Master Black Belt
/verify                         Certificate verification (tabs: Organisations | Personnel)
/about                          Story, quality policy, impartiality, objectives
/about/team
/about/accreditation            MUST have real content: bodies, scopes, IAF/MLA status, cert numbers, downloadable certificates
/resources/documents            12 public documents (A–L) as a searchable library
/resources/logos                Certification marks + usage rules (merge J.1 logo regulations)
/resources/insights             Blog (quality articles)
/locations/[country]            Consolidated country pages (see SEO section)
/contact
/get-a-quote                    Multi-step quote form
/portal                         Links to Client / Auditor / Reviewer login and Client Registration
/legal/privacy, /legal/terms, /legal/complaints-appeals
```

**Header:** Logo + "Exemplar Global Authorised" badge · Certification ▾ (mega menu: 7 standards grouped Quality & Operations / Information Security & Privacy / Health, Safety & Environment / IT Services, each with an icon and one-line descriptor) · Training ▾ · Verify · About ▾ · Resources ▾ · **[Verify certificate]** ghost button · **[Get a quote]** coral button · "Portal" icon menu.

## PAGE SPECIFICATIONS

### 1. Home
1. **Hero** (split layout): eyebrow chip "Impartial third-party certification · UK · IN · US · SG". Headline like *"Certification that stands up to scrutiny."* Subline naming the ISO 9001, 27001, 14001, 45001, 22000, 27701 and 20000-1 standards. CTAs: Get a quote / Verify a certificate. Right side: an animated 3D-ish **certificate card** (glassmorphism, seal ring, mono certificate number, "Valid ✓" emerald pill) that tilts on hover.
2. **Inline verification bar** directly under the hero: Company · Certificate No. · Country → Verify.
3. **Trust strip:** Exemplar Global badge, accreditation logos, "4 global offices", "7+ management-system standards", "150+ years combined auditor experience" (derived from team bios; confirm), with count-up.
4. **Standards grid:** 7 cards with icon, code, name, one-line outcome and "Explore →". Filter chips by theme.
5. **Why us:** 4 pillars (Impartial by policy · Auditors with 20–30+ yrs · Remote + on-site audits · Global recognition). Include a pull-quote from the impartiality statement, rewritten.
6. **Process stepper:** Apply & quote → Stage 1 (readiness) → Stage 2 (certification audit) → Decision & certificate → Annual surveillance → Recertification (year 3). Show an indicative timeline.
7. **Training band:** dark navy section. Featured Lead Auditor / Internal Auditor / Professional courses with duration, format, pass-mark chips and a "Browse courses" CTA.
8. **Client logo marquee** (greyscale, colour on hover) plus 3 testimonials.
9. **Industries served:** construction, manufacturing, software/IT, food, services, healthcare (icon tiles).
10. **FAQ** (6–8 questions: cost factors, timeline, remote audits, 27001:2013→2022 transition, integrated audits, how verification works).
11. **Final CTA** with a gradient mesh background: "Start your certification" + quote form entry.
12. **Footer:** 4 columns (Certification, Training, Company, Resources), office cards with flags, contact details, newsletter, legal, © {{current year}}.

### 2. Standard detail template (`/certification/[standard]`)
Sticky in-page nav (Overview · Benefits · Requirements · Process · Cost · FAQ). Sections:
- Hero with standard code in the serif display face, a one-line purpose, "Get a quote" plus "Download brochure".
- "Who it's for" chips (industries/roles).
- Benefits as a 2×3 icon grid (write **specific** benefits per standard; ISO 45001 must talk about worker safety, not the environment).
- **Requirements:** clause 4–10 accordion with plain-English explanations.
- Standard-specific extras:
  - **ISO 27001:2022:** an interactive **Annex A explorer**. Donut chart of 93 controls (Organizational 37 / People 8 / Physical 14 / Technological 34). Filter "New in 2022" to show the 11 new controls. A 2013→2022 mapping table for the 19 consolidated controls. A transition banner.
  - **ISO 27701:** clause 5–8 plus Annex A–F diagram, GDPR mapping callout, and a "27001 first vs combined project" comparison.
  - **ISO 9001:** 7 quality principles as a radial diagram, and an animated PDCA loop.
  - **ISO 22000:** HACCP + PRP/OPRP layered diagram.
  - **ISO 20000-1:** service-lifecycle diagram (Plan → Design → Transition → Deliver → Improve).
- Process timeline, **cost factors** card (org size, sites, scope complexity, IT infrastructure → man-days; no fake prices), related training courses, FAQ, sticky quote CTA.
- **Remove ISO 27001:2013 as a service.** Keep a short "2013 → 2022 transition" explainer page and redirect the old URL (301).

### 3. Training hub and course template
- Hub: filter by type (Lead / Internal / Professional), standard, format (online/classroom) and duration. Course cards show chips such as `5 days · 40 hrs · Online & Classroom · Pass 70%`.
- Course page: hero with key-facts bar (Duration · Format · Pass mark · Certificate · Fee "on request"). Tabs: Overview / Curriculum (day-by-day accordion) / Assessment & Certificate / Eligibility & Prerequisites / Online-session requirements (icon checklist) / Who should attend. Integrated IMS options (A–E) go in a comparison table with 6/7/8-day durations. The **"Enquire / Register"** form is sticky on the side on desktop and appears as a bottom sheet on mobile.
- Facts to keep: Lead Auditor 5 days/40 hrs, pass 70%, online + classroom · Internal Auditor 2 days/16 hrs, pass 60%, online · Professional: GDPR DPO 4 days, Six Sigma GB/BB/MBB 5 days each, pass 50%, 4 yrs experience required.

### 4. Verify (`/verify`), the hero utility
- Tabs: **Organisation certificate** | **Personnel certificate**.
- Fields: Name (min 3 characters, auto-uppercase, with helper text), Certificate number (mono input, format hint), Country (searchable combobox with flags).
- Result states, each designed: ✅ **Valid** (emerald card: org name, standard, scope, sites, issue/expiry dates, status timeline, QR code, "Download verification PDF"); ⚠️ **Suspended/Withdrawn/Expired** (amber/red); ❓ **Not found** (guidance + contact). Include a loading skeleton.
- Explain what verification means, and link to IAF CertSearch if applicable.
- Mock the API with a typed `/api/verify` route and seed data.

### 5. About / Team / Accreditation
- About: story, mission, **Quality Policy** as 3 commitment cards, **Impartiality** as a clean two-column "We always / We never" list (rewritten from the old 15 bullets), downloadable objectives.
- Team: 6 cards (photo or monogram, name, qualifications as chips, years of experience, standards covered). Clicking opens a detail drawer.
- Accreditation: accreditation-body logos, scope table, certificate PDFs, IAF membership. **Never leave it as "coming soon".** Hide the nav item until the content exists.

### 6. Resources
- **Document library:** 12 docs (Application Form, Certificate Agreement, Customer Satisfaction, Complaints/Appeals/Feedback, Certification Process, Information on Request, General Conditions, FAQ, Terms of Use, Logo Regulations, Follow-up/Grant/Renew Procedure, Covid-19 Policy). Show them as searchable rows with category, file type/size, updated date and a download button.
- **Logos:** a grid of the 7 marks, each with light/dark previews and PNG/SVG downloads, plus do/don't usage rules.
- **Insights:** editorial blog layout with featured post, categories and reading time.

### 7. Contact
- Split layout: the form (Name, Email, Phone with country code, Enquiry type [Certification / Training / Verification / Complaint & Appeal / Other], Message, consent) and 4 **office cards** (India–Delhi, UK–London, Singapore, USA–Delaware) with addresses from Report 01, local time and a map toggle.
- A clear "Complaints & Appeals" path linked to the procedure document.

### 8. Get a quote (multi-step)
Step 1 Standard(s) (multi-select cards, integrated-audit hint) → Step 2 Organisation (name, country, sites, employees range, industry) → Step 3 Scope and current status (new / transfer / recertification; existing CB) → Step 4 Contact → Review. Show a progress bar, autosave to localStorage, and a success screen with next steps.

## SEO & CONTENT STRATEGY
- Replace the 320 thin `iso-certification-in-{country}` and `iso-27001-certification-in-{country}` posts with **around 20–30 high-quality `/locations/[country]` pages** for countries where the firm actually operates. Each needs unique copy, local office/contact info, the standards offered, local regulations, and an FAQ. Set up **301 redirects** for all old URLs (to the country page or the standard page).
- Unique title/meta per page; H1 = primary keyword. Internal links between standards, courses, process and verification.
- JSON-LD on every template; `hreflang` if regional variants are added.
- Keep all old service URLs working via redirects (e.g., `/iso-9001-2015/` → `/certification/iso-9001`).

## UX DETAILS THAT MAKE IT FEEL PREMIUM
- Sticky header that turns into a frosted-glass bar after 40px of scroll; active-section indicators.
- Command palette (⌘K) to search standards, courses, documents and "verify certificate".
- Mobile: bottom sticky bar with "Quote" and "Verify"; mega menu becomes full-screen accordion sheets.
- Micro-interactions: card hover lifts 2px with a border-glow in coral at 20% opacity; buttons get arrow nudges; the seal ring rotates slowly on the hero certificate.
- Empty, loading and error states designed for every form and search.
- Consistent iconography: one icon per standard, reused everywhere.
- Live chat and WhatsApp are merged into one floating "Talk to us" button with a menu, so there's no clutter.

## DELIVERABLES
1. A full Next.js project with all routes above, typed content collections and seed content (fresh copy, using the facts from Report 01).
2. `tailwind` theme tokens + a `/styleguide` page that shows every component in light and dark mode.
3. A mock `/api/verify`, `/api/quote` and `/api/contact` with Zod validation.
4. `redirects.ts` mapping every legacy URL (21 pages + 320 posts) to its new destination.
5. A README covering setup, CMS schema, deployment (Vercel) and how to add a new standard or course.

Build page by page, starting with the design tokens and components, then Home, the Standard template, Verify, the Training templates and the rest. After each page, run a self-review against the performance, accessibility and brand-consistency rules above.
