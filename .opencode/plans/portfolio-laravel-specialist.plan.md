# Portfolio Laravel Specialist - Execution Plan

## 1. Component Architecture

### Current State
```
src/feature/home/
├── page/
│   └── index.astro          # Main page (to be updated)
├── section/
│   ├── hero.astro           # MODIFY
│   ├── experience.astro      # MODIFY
│   ├── skills.astro         # DELETE (replaced by stack.astro)
│   └── about.astro          # MODIFY
└── components/
    ├── badge.astro          # Keep (used in hero)
    ├── download-button.astro # Keep
    └── items.astro          # Keep (used in experience)
```

### Target Architecture
```
src/feature/home/
├── page/
│   └── index.astro          # UPDATE: Add new sections
├── section/
│   ├── hero.astro           # UPDATE: Laravel positioning
│   ├── stack.astro          # NEW: Stack showcase
│   ├── projects.astro       # NEW: Projects with failure info
│   ├── experience.astro      # UPDATE: Laravel focus
│   ├── about.astro          # UPDATE: Add failure narrative
│   └── contact.astro        # NEW: Contact section
└── components/
    ├── badge.astro          # UPDATE: Laravel orange color
    ├── download-button.astro # Keep
    ├── items.astro          # UPDATE: Filter to Laravel roles
    ├── project-card.astro   # NEW: Project card component
    └── tech-badge.astro     # NEW: Tech stack badge
```

### Component Relationships
```
index.astro (page)
├── hero.astro
│   └── badge.astro
├── stack.astro
│   └── tech-badge.astro
├── projects.astro
│   └── project-card.astro
├── experience.astro
│   └── items.astro
├── about.astro
│   └── (failure narrative inline)
└── contact.astro
    └── download-button.astro
```

---

## 2. Data Model Updates

### 2.1 cv.json Required Changes

**basics section:**
```json
{
  "basics": {
    "label": "Laravel Specialist",
    "summary": "Laravel specialist focused on building robust, scalable applications. 3+ years of experience with the Laravel ecosystem.",
    "heroSummary": "<strong>Laravel Specialist</strong> with 3+ years building <strong>robust SaaS, ERP, and web applications</strong>. Expert in <strong>Laravel, Tailwind CSS</strong> and the PHP ecosystem."
  }
}
```

**work section - Filter to Laravel roles:**
- Keep: Miocondo, Perfexya (have Laravel)
- Mark as Freelance: Athenadexfi, Wallsteam
- Remove non-Laravel mentions from highlights

**skills section - Filter to Laravel stack:**
```json
{
  "skills": [
    { "name": "Laravel", "level": "Avanzado", "category": "primary" },
    { "name": "PHP", "level": "Avanzado", "category": "primary" },
    { "name": "Tailwind CSS", "level": "Avanzado", "category": "primary" },
    { "name": "Livewire", "level": "Intermedio", "category": "primary" },
    { "name": "PostgreSQL", "level": "Avanzado", "category": "secondary" },
    { "name": "MySQL", "level": "Avanzado", "category": "secondary" },
    { "name": "Docker", "level": "Avanzado", "category": "secondary" },
    { "name": "Git", "level": "Avanzado", "category": "secondary" },
    { "name": "Linux", "level": "Intermedio", "category": "secondary" }
  ]
}
```

**Remove:**
- Node.js, NestJS, Express (backend)
- React, Next.js, Astro, Redux (frontend)
- Symfony, MongoDB, Prisma, Drizzle, Eloquent, Doctrine (other ORMs)
- Redis, React Native (other)

**projects section - Add failure projects:**
```json
{
  "projects": [
    {
      "name": "Brevio",
      "isActive": true,
      "status": "lanzado",
      "description": "...",
      "highlights": ["Laravel", "..."],
      "whatWorked": "Arquitectura escalable con colas...",
      "whatFailed": "Inicialmente utilicé Supabase en lugar de un backend Laravel dedicado, lo cual limitó la personalización."
    },
    {
      "name": "Zafiro",
      "isActive": true,
      "status": "lanzado",
      "description": "...",
      "highlights": ["Laravel", "..."],
      "whatWorked": "Dashboard completo con Filament...",
      "whatFailed": "La fase inicial sufrio retrasos por falta de documentacion del cliente."
    },
    {
      "name": "[FAILED_PROJECT_NAME]",
      "isActive": false,
      "status": "abandonado",
      "description": "...",
      "highlights": ["Laravel", "..."],
      "whatWorked": "Concepto inicial era sólido...",
      "whatFailed": "El proyecto fue abandonado por falta de tiempo y priorización de proyectos pagados."
    }
  ]
}
```

---

## 3. Implementation Order

### Phase 1: Foundation (Do First)
1. **Update cv.json** - Position, skills, projects with failures
2. **Update global.css** - Add Laravel orange color token
3. **Update hero.astro** - Laravel positioning, new copy

### Phase 2: New Sections
4. **Create stack.astro** - Stack showcase section
5. **Create tech-badge.astro** - Reusable badge component
6. **Create projects.astro** - Projects with failure info
7. **Create project-card.astro** - Project card component

### Phase 3: Update Existing
8. **Update experience.astro** - Filter to Laravel roles, add metrics
9. **Update items.astro** - Support for metrics display
10. **Update about.astro** - Add failure narrative section
11. **Create contact.astro** - Contact section

### Phase 4: Cleanup & Polish
12. **Update index.astro** - Add new sections in order
13. **Delete skills.astro** - No longer needed (replaced by stack)
14. **Update badge.astro** - Laravel orange accent
15. **Test all sections** - Links, responsiveness, animations

---

## 4. Design System

### 4.1 Color Token Update (global.css)

```css
/* ADD these tokens */
--color-laravel: #FF2D20;
--color-laravel-light: #FF4F40;
--color-laravel-dark: #CC2500;

/* UPDATE existing accent */
--color-accent: #FF2D20;  /* Changed from #059669 to Laravel orange */
```

### 4.2 Typography
- Keep existing: "Onest Variable", system-ui, sans-serif
- No changes needed

### 4.3 Component Styles

**Project Card:**
- White/secondary background
- Subtle border with hover effect
- Status badge (green=lanzado, yellow=in-progress, gray=abandonado)
- Clear sections: what worked (green), what failed (amber)

**Tech Badge:**
- Rounded pill shape
- Background varies by category (primary=laravel orange tint, secondary=gray tint)
- Consistent sizing

**Section Headers:**
- Use Laravel orange for emphasis
- Clear hierarchy

---

## 5. Security Considerations

### 5.1 Data Security
- cv.json contains personal info (email, phone) - ensure not publicly exposed via API
- Email links use `mailto:` protocol (safe)
- No sensitive credentials in JSON

### 5.2 External Links
- All external links use `target="_blank" rel="noopener noreferrer"`
- Company URLs are verified
- GitHub/LinkedIn links are safe

### 5.3 Content Safety
- No user-generated content displayed
- All projects are user's own work
- No personal addresses or sensitive locations

---

## 6. Content Requirements

### 6.1 Copy to Write

**Hero:**
- Headline: "Laravel Specialist"
- Sub: "Building robust, scalable Laravel applications for ambitious teams"
- CTA: "Need a Laravel developer?"

**Projects Section:**
- Title: "What I've Built"
- Subtitle: "The good, the bad, and what I learned"
- Need: At least 3 project descriptions with failure narratives

**About Section:**
- Current story (Venezuela, remote work)
- Laravel journey
- Failure narrative (1-2 paragraphs)

**Contact:**
- Title: "Let's Build Something"
- Sub: "Looking for a Laravel specialist?"
- CTA: "Contact Me"

### 6.2 Project Content Needed
- Brevio: Update description to mention Laravel or explain why it doesn't use it
- Zafiro: Already has Laravel - expand on it
- Need 1-2 more personal projects (including failures)
- For each project: name, description, status, what worked, what failed

---

## 7. File Checklist

### Files to CREATE
- [ ] `src/feature/home/section/stack.astro`
- [ ] `src/feature/home/section/projects.astro`
- [ ] `src/feature/home/section/contact.astro`
- [ ] `src/feature/home/components/tech-badge.astro`
- [ ] `src/feature/home/components/project-card.astro`

### Files to UPDATE
- [ ] `src/shared/data/cv.json` (major content update)
- [ ] `src/shared/styles/global.css` (add Laravel colors)
- [ ] `src/feature/home/page/index.astro` (add sections)
- [ ] `src/feature/home/section/hero.astro` (new positioning)
- [ ] `src/feature/home/section/experience.astro` (filter to Laravel)
- [ ] `src/feature/home/section/about.astro` (add failures)
- [ ] `src/feature/home/components/items.astro` (metrics support)
- [ ] `src/feature/home/components/badge.astro` (Laravel colors)

### Files to DELETE
- [ ] `src/feature/home/section/skills.astro` (replaced by stack.astro)

---

## 8. Implementation Notes

### 8.1 Laravel Color Usage
- Use sparingly - for accents and emphasis only
- Primary use: Logo, key CTAs, primary badges
- Do NOT use for large background areas

### 8.2 Failure Project Display
- Status badge for "abandonado" should be subtle (gray, not red)
- "What failed" section should be framed positively ("lessons learned")
- Use amber/orange for failure highlights, green for successes

### 8.3 Animation Strategy
- Keep existing fadeInUp animations from global.css
- Add stagger delays for grid items
- Use Tailwind's transition utilities for hover effects
- No JavaScript libraries needed

### 8.4 Responsive Breakpoints
- Mobile-first approach
- Stack: 1 column mobile, 2-3 columns desktop
- Projects: 1 column mobile, 2-3 columns desktop
- Experience: Timeline on desktop, list on mobile

---

*Execution plan created for Portfolio Laravel Specialist*
*Awaiting approval before implementation*
