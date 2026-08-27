# Global Collective Capital Group (GCCG) — GoHighLevel Website Prototype

This prototype provides the complete editorial redesign architecture for **Global Collective Capital Group (GCCG)**, unifying its international real estate, business growth consulting, *Build Beyond Borders™* methodology, programs, and private advisory under one cohesive, high-end collective brand.

---

## 1. Prototype Structure

- **`index.html`**: Production-ready, responsive, semantic HTML structure structured specifically for GoHighLevel section/row/column modularity.
- **`styles.css`**: Editorial luxury styling system (Obsidian Navy `#050811`, Champagne Gold `#c5a880`, Cormorant Garamond serif, Plus Jakarta Sans) avoiding generic funnel templates.
- **`script.js`**: Interactive pathway concierge router, multi-step intake modal, mobile drawer menu, and sticky header transition.

---

## 2. Key Architecture Solved

### A. The "One Collective, Multiple Pathways" Solution
Solves the client's core challenge: making real estate, business consulting, events, and advisory feel like **one cohesive international institution** rather than disconnected businesses.
- **Unified Hero & Group Tagline:** *"Build. Invest. Expand. Beyond Borders."*
- **4 Interconnected Business Divisions:** Real Estate, Business Growth, Education & Experiences, Consulting & Advisory.
- **Interactive Pathway Concierge:** Allows visitors to self-identify ("Invest in Property", "Grow My Business", "Expand Globally", "Attend a Program", "Private Advisory") and immediately routes them to the correct GHL workflow and calendar.

### B. GoHighLevel CRM & Automation Mapping
- **Paid Strategy Session (£497):** Service page / card → Stripe 1-step checkout → GHL Calendar booking → Pre-call intake questionnaire → Confirmation email + SMS reminder workflow.
- **VIP Intensive (£2,500):** Application Form → GHL Opportunity Pipeline (*"VIP Applications"*) → Internal Review & Approval webhook/tag → Private Invoice / Payment link → VIP onboarding calendar.
- **Multi-Step Lead Capture:** Modular 3-step intake form mapping to custom contact fields, automated tagging (`pathway_real_estate`, `pathway_business_growth`, etc.), and dynamic pipeline routing.

---

## 3. How to Deploy to GoHighLevel

1. **Custom CSS:** Copy `styles.css` into the GHL Funnel/Website Settings -> **Custom CSS** box.
2. **Custom JS:** Place `script.js` into the **Footer Tracking Code** or page footer HTML element.
3. **Sections:** Create GHL Sections matching the clean class names (`hero-section`, `divisions-section`, `framework-section`, `pathway-section`, `realestate-section`, `advisory-section`, `founder-section`).
