# Siddarth S — Portfolio (Structural Scaffold)

Premium editorial UX portfolio. **This is the architecture milestone only** —
no visual design exists yet by deliberate decision: `design.md` is the single
source of truth for the design system and has not been provided.

## Source of truth

The project markdown files govern everything:

| File | Governs | Status |
|---|---|---|
| `design.md` | Tokens, typography, spacing, components, motion | **Not yet provided** |
| `claude.md` | Development standards, principles | Applied |
| `vision.md` | Creative direction | Applied |
| `content.md` | Landing page copy | Wired verbatim into `content/site.ts` |
| `projects/*.md` | Case study knowledge base | Wired into `content/projects/*.ts` |

## Architecture

```
app/
  layout.tsx            Root layout: landmarks, skip link, metadata
  page.tsx              Landing: Hero → Work → About → Experience → Skills → Photography
  globals.css           Tailwind v4 entry; @theme block reserved for design.md tokens
  not-found.tsx         404
  sitemap.ts            SEO (domain TODO)
  robots.ts             SEO
  work/[slug]/page.tsx  Case studies, statically generated from the content layer

components/
  layout/               Container, Section, SiteHeader, SiteFooter
  sections/             One component per landing section
  case-study/           CaseStudyHeader, CaseStudySection, ContentPlaceholder, CaseStudyNav
  ui/                   (reserved — shadcn/ui is initialized AFTER design.md,
                         because `shadcn init` writes its own color tokens)

content/
  site.ts               Landing copy, 1:1 from content.md
  projects/             Typed case study data mirroring projects/*.md

lib/
  types.ts              Content schema (CaseStudy, sections, pending status)
```

## Key decisions

1. **Content is data, pages are renderers.** Each case study is a typed
   `CaseStudy` object whose sections follow the canonical editorial order
   (Overview → … → Reflection). Enriching a case study later = editing a data
   file; components don't change.
2. **Pending sections are explicit.** Sections with no source content carry
   `status: "pending"` and render `<ContentPlaceholder>` — visibly marked,
   never lorem ipsum, never invented details.
3. **Zero invented visual design.** No colors, fonts, spacing, or component
   styling anywhere. Markup is semantic HTML with `// Design Token Placeholder`
   comments marking every point where design.md values will land
   (`app/globals.css` `@theme`, `next/font` in `app/layout.tsx`, component
   classNames).
4. **shadcn/ui and Framer Motion are deferred.** `framer-motion` and
   `lucide-react` are installed but unused: motion values and icon usage are
   design.md decisions (claude.md: "keep motion subtle"). shadcn/ui is not
   initialized yet because it would inject its own token palette.

## Pending inputs

- `design.md` → fills `@theme`, fonts, all component styling, motion values
- Case study enrichment for: Constraints, User Flows, Wireframes, Iterations,
  Design Decisions, Final Solution (both projects) + Process (Just Be Lekker)
- Assets: project cover imagery, photography gallery
- Contact channels (email/LinkedIn/resume) — not in content.md yet
- Production domain for `sitemap.ts`

## Run

```bash
npm install
npm run dev
```
