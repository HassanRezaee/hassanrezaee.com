# Review notes — evidence cases + LinkedIn package

Branch: `evidence-cases-linkedin-package`  
Do **not** merge, publish, deploy, or edit LinkedIn until Hassan reviews.

This folder is listed in `robots.txt` as `Disallow: /handoff/`. Do not move these notes onto a public HTML path.

---

## What changed

- Homepage identifies both roles immediately: AI engineering at CAE, and Co-founder & Technical Lead of OneClick.
- Three selected cases in the requested order: CAE agentic workflows, OneClick with clinicians, predictive maintenance and forecasting.
- Work is a case-study hub plus a compact career timeline. Official titles unchanged (CAE remains Data Scientist).
- AI Engineering is a technical companion: grounding, tools, evaluation, deployment. Conceptual diagram is labelled as conceptual. One technology list, tied to verified work.
- OneClick is a founder/product case: Visit OneClick with existing UTM parameters, administrative-only scope, pre-launch, architecture that can be stated in public. No fake UI. Vague “AI-driven capabilities” removed.
- Research opens on how spatial statistics inform engineering. Featured papers use verified titles, venues, years, and DOIs. Remaining papers are compact. Scholar and ResearchGate stay.
- Nav label: Outside work / En dehors du travail. URLs stay `/hobbies.html`.
- Contact copy matches the brief. Languages: professional English, working knowledge of French, native Persian. No bilingual-fluency claim.
- French pages follow the same IA. Forward-deployed engineering is explained in prose (“auprès des équipes métier”), not calqued as a job title.
- Sharing images: `images/og/home.jpg`, `images/og/work.jpg`, `images/og/oneclick.jpg`. Home crops the existing mountain portrait; it does not generate a new likeness. OneClick uses the product mark on cream, not the personal logo alone.
- Contrast: decorative coral kept; small-text coral is `--coral-text`. Muted text darkened on light theme. `prefers-reduced-motion` disables animation and transition.
- Mobile hero: introduction and actions before the photo below 1100px.
- No public résumé action (none supplied).
- OneClick JSON-LD describes the software and pre-launch stage without Offer/PreOrder traction markup.

---

## Private application material — do not publish yet

These remain **candidate facts** from the IFS application context. They are not on the public pages.

| Fact | Required qualification |
| --- | --- |
| ~90% workflow-time reduction | User-acceptance testing only, not a demonstrated full production rollout |
| eBOM → MBOM, process plans, digital work instructions | Internal manufacturing workflow; keep unnamed on the public site |
| Azure production migration and Windchill integration | Described as still in progress in the application material |
| ~38 clinicians | Co-design collaborators, not paying customers or active production users |

Public copy uses qualitative wording instead. If any of the above is cleared, the strongest places to add it are the CAE case on Work and the clinician section on OneClick.

---

## Optional inputs that would materially improve the result

1. A general-purpose public résumé (PDF) if a Download résumé action is wanted.
2. An approved OneClick product screenshot or short demo with demonstration data.
3. The real OneClick start month, for LinkedIn (site currently says 2024–present only).
4. Clearance of any private metric or named clinician story for public use.
5. Current LinkedIn screenshots (banner, About, Featured) if the dated 24 Aug 2026 export is stale.

---

## Confidentiality check (public HTML)

Public pages must not contain: eBOM, MBOM, Windchill, digital work instruction(s), 90%, ~38 clinicians as customers, IFS branding, Principal title, bilingual fluency claims, “maintenance intelligence,” Azure Fundamentals as a headline credential.

---

## Verification

Local preview: `python3 -m http.server 8765` from the repo root on 9 September 2026. No Lighthouse run; scores are not invented.

**Routes (HTTP 200):** `/` `/work.html` `/ai.html` `/oneclick.html` `/research.html` `/hobbies.html` `/contact.html` `/fr/` `/fr/work.html` `/fr/ai.html` `/fr/oneclick.html` `/fr/research.html` `/fr/hobbies.html` `/fr/contact.html` `/privacy.html` `/pricing.html` plus OG images, `robots.txt`, `sitemap.xml`. Local `src`/`href` assets on live pages resolve.

**Layout measurements (CDP):**
- 390px Home EN: copy and actions above photo; H1 31.2px; no horizontal overflow.
- 390px Home FR: same order; H1 31.2px; no overflow.
- 1440px Home EN: H1 51.84px; hamburger hidden; no overflow. Photo sits beside copy (taller image, so its top edge is higher — side-by-side, not photo-first stacking).
- 390px OneClick: no overflow; Visit OneClick keeps UTM `utm_source=hassanrezaee.com&utm_medium=referral&utm_campaign=founder_site`.
- Dark theme persisted via `localStorage` after toggle (`data-theme="dark"` on OneClick).
- Menu opens on 390px; Escape sets `aria-expanded="false"` and returns focus to the menu button.

**Contrast (calculated from CSS tokens, light unless noted):**
- muted `#5A554E` on paper `#F4F0E8`: 6.50:1
- muted on surface `#EBE6DC`: 5.94:1
- coral-text `#B53B2A` on paper: 5.10:1
- dark muted `#B8B2A8` on `#111110`: 8.97:1
- dark coral-text `#F4A090` on `#111110`: 9.25:1

**Confidentiality:** no public-HTML hits for eBOM, MBOM, Windchill, digital work instruction, 90%, 38 clinicians, IFS, Principal, bilingual fluency, maintenance intelligence, Azure Fundamentals, TODO.

**Limitations:** Cursor screenshot capture of the 1440px override returned a blank cream frame; visual checks used accessibility snapshots and measured boxes instead of a reliable pixel screenshot dump. No current live LinkedIn banner/Featured inspection. No public résumé. No approved OneClick product screenshot.

**Before/after:** live `main` (https://hassanrezaee.com/) is the before. This branch is the after. Compare Home, Work, and OneClick in both languages after merge-preview.
