# Portfolio Laravel Specialist - Specification

## 1. Brand Identity

### 1.1 Positioning Statement
**"Alejandro Cabeza: Laravel Specialist"**

El portafolio debe comunicar de manera inmediata y directa que Alejandro es un desarrollador especializado en el ecosistema Laravel, no un desarrollador generalista. La propuesta de valor se centra en profundidad técnica sobre amplitud de conocimientos.

### 1.2 Personality & Mentality to Convey

**Attributes to communicate:**
- **Ambitious**: Shows drive for continuous improvement and staying at the cutting edge of Laravel ecosystem
- **Resilient**: Open about challenges faced and how they led to growth
- **Transparent**: Honest about both successes AND failures - builds trust through authenticity
- **Deep Specialist**: Focused expertise rather than shallow breadth
- **Builder Mentality**: Someone who ships real products, not just code snippets

**Visual Tone:**
- Bold and technical - avoid generic "designer" aesthetics
- Clean but with personality - Laravel ecosystem has a distinct identity (Taylor Otwell's minimalist approach)
- Show code quality through design precision
- Transparency about failures as a differentiator from typical portfolios

### 1.3 Target Audience
- International clients seeking Laravel expertise (US, Europe, UK markets)
- Companies building or maintaining Laravel applications
- Startups needing a Laravel specialist who can own backend architecture
- Agencies looking for Laravel developers for their PHP projects

---

## 2. Content Strategy

### 2.1 Section Structure

The portfolio should have these main sections (in order):

1. **Hero** - Immediate positioning statement
2. **Stack Focus** - Laravel ecosystem showcase
3. **Projects** - Personal projects (successes AND failures)
4. **Experience** - Work history with Laravel emphasis
5. **About** - Personal story, failures, and learnings
6. **Contact** - Clear CTA

### 2.2 Content per Section

#### Hero Section
- **Headline**: Direct positioning - "Laravel Specialist" or "Full-Stack Laravel Developer"
- **Subheadline**: What you build and for whom
- **Primary CTA**: "Need a Laravel developer?"
- **Secondary CTA**: View projects
- **Availability indicator**: Clear "Available for work" badge

#### Stack Focus Section
- **Purpose**: Showcase Laravel ecosystem depth
- **Content**:
  - Laravel (primary - most prominent)
  - Tailwind CSS
  - Livewire (if applicable)
  - Supporting: PHP 8.x, PostgreSQL, MySQL, Docker
- **Visual**: Icons or badges showing proficiency level
- **Message**: "This is my stack. I specialize in it."

#### Projects Section (CRITICAL)
- **Personal Projects Only** - Not client work
- **Show BOTH successes and failures**:
  - "What worked" section for each project
  - "What I learned / What failed" section for each project
  - This differentiates from typical portfolios
- **Project cards should show**:
  - Project name and one-line description
  - Tech stack used (Laravel-focused)
  - Status: Launched / Abandoned / In Progress
  - Link to code (GitHub)
  - Link to live project (if applicable)
  - Key metrics if available (users, performance improvements)
  - "The good, the bad, the ugly" - honest breakdown

#### Experience Section
- **Focus on Laravel-related roles**
- **Highlight**:
  - Laravel projects within each role
  - Metrics and impact
  - Leadership/team aspects
- **De-prioritize**: Non-Laravel technologies in descriptions

#### About Section
- **Personal story**: Brief background (Venezuela-based, remote work)
- **The failure narrative**: Share 1-2 personal project failures honestly
  - What happened?
  - What did you learn?
  - How did it make you better?
- **Why Laravel**: Your story with the framework
- **Values**: What you care about in development

#### Contact Section
- **Clear CTA**: "Let's build something with Laravel"
- **Email**: Direct email link
- **Social**: LinkedIn, GitHub
- **Availability**: Clear status

---

## 3. Stack Specialization

### 3.1 Technology Positioning

**Primary Stack (Featured Prominently):**
- Laravel (PHP Framework) - CENTER STAGE
- Tailwind CSS - Featured
- Livewire - Featured (if used)

**Secondary Stack (Mentioned but not highlighted):**
- PHP 8.x
- PostgreSQL / MySQL
- Docker
- Git
- Alpine.js (solo si hay interactividad simple necesaria)

**Removed/Deprioritized:**
- Node.js (remove from primary display)
- NestJS (remove from primary display)
- Express (remove from primary display)
- React (depriorize - solo mencionar si es relevante)
- Next.js (depriorize)
- Symfony (depriorize - focus on Laravel)
- MongoDB (remove unless specifically needed)
- Redis (only mention when relevant to specific projects)

### 3.2 How to Show Depth (Not Breadth)

**Approach:**
- Show mastery through project complexity, not number of technologies
- Each project should showcase Laravel depth (queues, events, broadcasting, etc.)
- Demonstrate understanding of Laravel ecosystem: Forge, Vapor, Horizon, Pulse, etc.
- Show modern Laravel practices: PHP 8 features, static analysis, testing

**Visual representation:**
- Instead of "Node.js, NestJS, Express, Laravel, Symfony..." 
- Show: "Laravel + Tailwind + Livewire" with depth indicators

---

## 4. User Journey

### 4.1 The 10-Second Test

**What visitor sees in first 10 seconds:**
1. Name + "Laravel Specialist" positioning
2. Clear value proposition: "I build robust Laravel applications"
3. Availability status
4. Primary CTA visible

**Success criteria:** Visitor immediately understands "This is a Laravel specialist, not a generalist"

### 4.2 Scroll Journey

```
[Hero]
  ↓ "I specialize in Laravel"
[Stack Section]
  ↓ "Here are projects I built with Laravel"
[Projects Section]
  ↓ "Here's my work history"
[Experience]
  ↓ "Here's who I am, including failures"
[About]
  ↓ "Let's work together"
[Contact]
```

### 4.3 Emotional Journey

1. **Curiosity** → "A Laravel specialist? Let me see what that means"
2. **Interest** → "These projects show real Laravel depth"
3. **Trust** → "He shares failures too - he's authentic"
4. **Confidence** → "This person knows Laravel deeply"
5. **Action** → "I should contact him for my Laravel project"

### 4.4 Primary CTA

**Main CTA**: "Need a Laravel developer?"
- Links to contact section / email
- Should be prominent in hero and repeated in footer

**Secondary CTAs**:
- "View my Laravel projects"
- "Download CV"

---

## 5. Technical Approach

### 5.1 Technology Decision

**Decision: Keep Astro + Tailwind CSS**

**Rationale:**
- User explicitly wants to keep it simple with Astro
- No Alpine.js needed - use pure CSS/Tailwind for interactivity
- Can achieve great results with Astro + Tailwind alone
- Keep the project lightweight and fast

### 5.2 Design System Preferences

**Laravel-inspired aesthetic:**
- **Typography**: Clean sans-serif (Inter, system-ui)
- **Colors**: 
  - Primary: Laravel orange (#FF2D20) as accent
  - Neutral: Grays, whites, blacks
  - Minimal color palette
- **Layout**: 
  - Generous whitespace
  - Clear hierarchy
  - Functional over decorative
- **Components**: 
  - Card-based project display
  - Badge-style tech tags
  - Clean iconography

### 5.3 Interactive Elements (Pure CSS/Tailwind)

Use Tailwind CSS for:
- Hover effects with `group` and `group-hover`
- Transitions with `transition-all duration-300`
- Animations with `@keyframes` + `animate-`
- Mobile menu with checkbox hack or pure CSS toggle
- Scroll-based reveals with Intersection Observer (via small Astro script)

**Do NOT use**: Alpine.js, React, Vue, or any JS framework for interactivity

### 5.4 Performance Requirements

- Lighthouse score: 95+ (maintain current Astro performance)
- First Contentful Paint: < 1.5s
- Total page weight: < 500KB (excluding images)
- No layout shift

---

## 6. Section-by-Section Breakdown

### 6.1 Hero Section

**Layout:**
- Full viewport height option
- Left-aligned content
- Avatar optional (or small, subtle)

**Content:**
```
[Badge: Available for work]
[H1: Alejandro Cabeza - Laravel Specialist]
[Sub: Building robust, scalable Laravel applications for ambitious teams]
[CTA: Need a Laravel developer? → Contact]
[Secondary: View Projects → #projects]
```

**Design notes:**
- Bold headline with "Laravel Specialist" prominent
- Use Laravel orange as accent color
- Keep it minimal - this is a professional portfolio, not a creative showcase

### 6.2 Stack Section

**Layout:**
- Grid of tech badges
- Each tech has icon + name + proficiency indicator

**Content:**
```
[Section Title: My Stack]
[Laravel ██████ Expert]
[Tailwind CSS ██████ Expert]
[Livewire ██████ Proficient]
[+ supporting: PHP 8, PostgreSQL, Docker]
```

**Design notes:**
- Laravel gets visual prominence (larger, first, accent color)
- Others in neutral gray
- Proficiency indicators: dots or bar

### 6.3 Projects Section

**Layout:**
- Grid of project cards (2-3 columns on desktop)
- Each card expandable or with "read more"

**Project Card Structure:**
```
[Project Name]
[Status badge: Launched | Abandoned | In Progress]
[One-line description]
[Tech stack badges]
[Links: GitHub | Live]
---
[What worked]
[What failed / What I learned]
```

**Content Requirements:**
- Minimum 3 personal projects
- At least 1 should be "abandoned" or "failed" - show authenticity
- Each project demonstrates Laravel depth

**Design notes:**
- Clear visual distinction between "success" and "failure" projects
- Failure projects should NOT look like failures - they're learning badges
- Use consistent card design

### 6.4 Experience Section

**Layout:**
- Timeline or card list
- Reverse chronological

**Content per role:**
```
[Company Name]
[Role] | [Dates]
[What I did - focus on Laravel aspects]
[Metrics - if available]
[Tech used - Laravel-focused]
```

**Design notes:**
- Emphasize Laravel-related achievements
- De-emphasize non-Laravel tech in descriptions

### 6.5 About Section

**Layout:**
- Two columns: personal story + failure narrative
- Or single column with clear sections

**Content:**
```
[Heading: About Me]
[Brief: Venezuela-based, remote-first, X years experience]

[Heading: My Laravel Story]
[How I got started with Laravel]
[Why I specialize in it]

[Heading: What I've Learned from Failure]
[Project 1: What happened + What I learned]
[Project 2: What happened + What I learned]

[Heading: What I Value]
[Quality over speed]
[Honest communication]
[Continuous learning]
```

**Design notes:**
- Make failure section prominent - it's a differentiator
- Use quotes or callouts for key learnings

### 6.6 Contact Section

**Layout:**
- Centered, prominent
- Footer also contains contact info

**Content:**
```
[Heading: Let's Build Something]
[Sub: Looking for a Laravel specialist?]
[CTA: Contact Me]
[Email: alejandrocabezaoficial@gmail.com]
[Social: LinkedIn | GitHub]
[Availability: Currently available for new projects]
```

---

## 7. Key Messages & Copy

### 7.1 Headlines

**Hero:**
- "Laravel Specialist" (primary)
- "Building robust Laravel applications" (secondary)

**Projects:**
- "Personal Projects" or "What I've Built"
- Include "What worked, what didn't" as subtitle

**About:**
- "The Good, The Bad, The Ugly" or "Learning from Failure"

### 7.2 Value Propositions

**Short (10 seconds):**
"Alejandro Cabeza - Laravel Specialist. I build robust, scalable Laravel applications."

**Medium (30 seconds):**
"Senior Laravel developer with 3+ years of experience building SaaS, ERP, and web applications. I specialize in Laravel and Tailwind CSS and focus on delivering quality code that scales. Based in Venezuela, working remotely with international clients."

**Long (about page):**
Full story including failure narrative and Laravel journey.

### 7.3 Key Differentiators to Communicate

1. **Specialization**: "I don't do everything. I do Laravel. Really well."
2. **Transparency**: "I share my failures because they made me better"
3. **Quality**: "Code that scales, not just code that works"
4. **Remote-ready**: "Venezuela-based, working with international clients"
5. **Ownership**: "I build complete solutions, not just features"

### 7.4 Messaging Guidelines

**DO:**
- Use direct, confident language
- Be specific about Laravel expertise
- Show, don't tell (through projects)
- Be honest about limitations and failures

**DON'T:**
- Use generic "full-stack developer" language
- List every technology ever used
- Hide failures or pretend everything succeeded
- Be modest about Laravel expertise

---

## 8. Implementation Notes

### 8.1 Data Updates Required

Update `cv.json`:
- Change `basics.label` from "Senior Backend Engineer" to "Laravel Specialist"
- Update `basics.summary` to focus on Laravel
- Update `basics.heroSummary` to emphasize Laravel stack
- Filter `skills` to show only Laravel ecosystem + essentials
- Add failure projects to `projects` array
- Update `services` to be Laravel-focused

### 8.2 New Sections to Create

- Stack showcase section (new)
- Failure narrative section (new)
- Updated projects with failure info (update existing)
- Contact section (new)

### 8.3 Files to Modify

1. `src/shared/data/cv.json` - Content updates
2. `src/feature/home/section/hero.astro` - Update positioning
3. New: `src/feature/home/section/stack.astro` - Stack showcase
4. New: `src/feature/home/section/projects.astro` - Updated projects with failure info
5. Update: `src/feature/home/section/about.astro` - Add failure narrative
6. New: `src/feature/home/section/contact.astro` - Dedicated contact section

### 8.4 Design Tokens to Add

```css
/* Add to Tailwind config */
--color-laravel: #FF2D20;
--color-laravel-light: #FF4F40;
--color-laravel-dark: #CC2500;
```

---

## 9. Success Criteria

### 9.1 Brand Positioning
- [ ] Visitor can identify "Laravel Specialist" in < 10 seconds
- [ ] No mention of Node.js/NestJS in hero or primary sections
- [ ] Stack clearly shows Laravel ecosystem focus

### 9.2 Content
- [ ] At least 3 personal projects displayed
- [ ] At least 1 project shows "failure/abandoned" status
- [ ] Each project includes "what worked" and "what I learned"
- [ ] About section includes failure narrative

### 9.3 Technical
- [ ] Lighthouse performance > 95
- [ ] Mobile responsive (all sections)
- [ ] Pure Astro + Tailwind CSS (no Alpine.js)
- [ ] All interactivity via CSS/Tailwind

### 9.4 User Journey
- [ ] Clear CTA in hero: "Need a Laravel developer?"
- [ ] Scroll journey logically flows from positioning to proof to contact
- [ ] Contact section has multiple CTAs (email, LinkedIn, GitHub)

---

## 10. Next Steps

1. **Approve this specification** - Confirm all sections and approach
2. **Update cv.json** - Add failure projects, update positioning
3. **Create new components** - Stack section, updated projects, contact
4. **Update existing components** - Hero, about section
5. **Design review** - Ensure Laravel aesthetic is consistent
6. **Test** - Verify all links, performance, mobile responsiveness
7. **Deploy** - Ship the new portfolio

---

*Specification created for Alejandro Cabeza Portfolio Redesign*
*Focus: Laravel Specialization + Authenticity through Failure Sharing*
*Tech: Astro + Tailwind CSS (no Alpine.js)*
