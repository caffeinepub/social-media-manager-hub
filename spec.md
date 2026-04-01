# The Social Jay – SEO Notes Page

## Current State
The site has pages: Home, Courses, Roadmap, Learn, Resources, Blog, Contact, Testimonials, Portfolio, FAQ, Pricing, Quiz, Community. No dedicated SEO Notes page exists.

## Requested Changes (Diff)

### Add
- New `/seo-notes` page with full SEO educational content organized into structured sections
- Route in App.tsx for the new page
- Navigation link in Layout.tsx (under Learn or as a standalone nav item)

### Modify
- App.tsx: add seoNotesRoute
- Layout.tsx: add SEO Notes to nav (add under a Learn dropdown or standalone)

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/SEONotesPage.tsx` with all SEO content structured in tabbed/sectioned layout
2. Sections: Digital Marketing Overview, Key Modules (Click/Impression/CTR/etc), GMB & Local SEO, On-Page SEO, Technical SEO, Backlinks & Off-Page SEO
3. Include the CTR comparison table, URL structure breakdown, image size reference table, backlink types list
4. Add route in App.tsx
5. Add navigation link in Layout.tsx under Learn or Resources
