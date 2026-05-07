# AGENTS.md — Agent Guide for This Project

> This file is intended for AI coding agents. The reader is assumed to know nothing about the project.

---

## Project Overview

This is a **personal academic homepage** built with the [**al-folio**](https://github.com/alshedivat/al-folio) Jekyll theme. It is deployed to **GitHub Pages** at `https://guanyuanpeterpan.github.io`.

The site is authored by **Guanyuan Peter Pan (潘冠源)** and showcases:

- An about page with profile, news, latest posts, and selected publications.
- A publications page powered by Jekyll Scholar / BibTeX.
- A CV page rendered from JSON Resume data.
- A blog (currently empty).
- A projects showcase (currently empty).

The project language is **English** (site lang: `en`), with some Chinese content in personal info.

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Static Site Generator | [Jekyll](https://jekyllrb.com/) (Ruby) |
| Templating Engine | Liquid (`.liquid` files) |
| Styling | SCSS / Sass (compiled by Jekyll) |
| CSS Framework | Bootstrap + MDBootstrap |
| Icons | Font Awesome, Academicons, Tabler Icons |
| JS Runtime | Node.js (for build tooling only) |
| Deployment Target | GitHub Pages (`gh-pages` branch) |
| Containerization | Docker + Docker Compose (optional local dev) |

### Key Ruby Gems (from `Gemfile`)

- `jekyll` — core generator
- `jekyll-archives-v2` — year/tag/category archives
- `jekyll-email-protect` — obfuscate emails
- `jekyll-feed` — RSS/Atom feed
- `jekyll-get-json` — fetch external JSON
- `jekyll-imagemagick` — responsive WebP images
- `jekyll-jupyter-notebook` — embed Jupyter notebooks
- `jekyll-link-attributes` — external link attributes
- `jekyll-minifier` — HTML/JS/CSS minification
- `jekyll-paginate-v2` — pagination
- `jekyll-regex-replace` — regex in Liquid
- `jekyll-scholar` — BibTeX bibliography rendering
- `jekyll-sitemap` — XML sitemap
- `jekyll-tabs` — tabbed content
- `jekyll-terser` — JS minification (Terser)
- `jekyll-toc` — table of contents
- `jekyll-twitter-plugin` — embed tweets
- `jemoji` — GitHub-style emoji
- `classifier-reborn` — related posts via LSI

### Node.js Dev Dependencies (from `package.json`)

- `prettier` — code formatter
- `@shopify/prettier-plugin-liquid` — Prettier plugin for Liquid templates

---

## Project Structure

```
.
├── _config.yml                 # Main Jekyll configuration (site settings, plugins, theme)
├── Gemfile / Gemfile.lock      # Ruby dependencies
├── package.json / package-lock.json  # Node.js dev dependencies
├── Dockerfile / docker-compose.yml   # Local Docker development
├── purgecss.config.js          # PurgeCSS configuration for deployment
├── robots.txt                  # SEO robots rules (Jekyll front matter)
│
├── _bibliography/
│   └── papers.bib              # BibTeX bibliography entries
├── _data/
│   ├── cv.yml                  # CV data in YAML (fallback if resume.json missing)
│   ├── socials.yml             # Social media links and contact info
│   └── repositories.yml        # GitHub repos for showcase (if used)
├── _includes/                  # Reusable Liquid partials
│   ├── head.liquid             # HTML <head> content
│   ├── header.liquid           # Navigation bar
│   ├── footer.liquid           # Footer
│   ├── scripts.liquid          # JS scripts at end of body
│   ├── figure.liquid           # Responsive image figure
│   ├── news.liquid             # News section
│   ├── social.liquid           # Social icons
│   ├── cv/                     # CV layout partials (map, time_table, etc.)
│   └── resume/                 # Resume section partials
├── _layouts/                   # Page layouts
│   ├── default.liquid          # Base HTML wrapper
│   ├── about.liquid            # About / homepage layout
│   ├── page.liquid             # Generic page
│   ├── post.liquid             # Blog post
│   ├── bib.liquid              # Bibliography entry layout
│   ├── cv.liquid               # CV page layout
│   └── distill.liquid          # Distill-style article
├── _news/                      # News/announcement items (inline on about page)
├── _pages/                     # Static pages
│   ├── about.md                # Homepage (permalink: /)
│   ├── publications.md         # Publications list
│   ├── cv.md                   # CV page
│   ├── blog.md                 # Blog index
│   └── 404.md                  # 404 error page
├── _posts/                     # Blog posts (empty currently)
├── _projects/                  # Project showcases (empty currently)
├── _plugins/                   # Custom Ruby Jekyll plugins
│   ├── external-posts.rb       # Fetch external blog posts via RSS
│   ├── google-scholar-citations.rb  # Fetch Google Scholar citation counts
│   ├── download-3rd-party.rb   # Download 3rd-party JS/CSS libs locally
│   ├── cache-bust.rb           # File cache-busting for assets
│   └── ...                     # Other utility plugins
├── _sass/                      # SCSS stylesheets
│   ├── _variables.scss         # Color and sizing variables
│   ├── _themes.scss            # Light/dark theme definitions
│   ├── _base.scss              # Base element styles
│   ├── _layout.scss            # Layout utilities
│   ├── _cv.scss                # CV-specific styles
│   ├── _distill.scss           # Distill article styles
│   └── font-awesome/           # Font Awesome SCSS
├── _scripts/                   # JS snippets processed by Jekyll/Liquid
│   └── search.liquid.js        # Search index generation
├── assets/
│   ├── css/                    # Compiled CSS and vendor stylesheets
│   │   └── main.scss           # Main Sass entry point
│   ├── js/                     # JavaScript files
│   ├── img/                    # Images (profile pic, previews, etc.)
│   ├── json/
│   │   └── resume.json         # JSON Resume data (primary CV source)
│   ├── fonts/                  # Custom fonts
│   └── ...                     # Other static assets
├── bin/
│   ├── cibuild                 # CI build script: `bundle exec jekyll build`
│   ├── deploy                  # Manual deployment script to gh-pages
│   └── entry_point.sh          # Docker container entry point
└── .github/workflows/          # GitHub Actions CI/CD
    ├── deploy.yml              # Auto-deploy to gh-pages on push
    ├── prettier.yml            # Code formatting check
    ├── broken-links.yml        # Link checker (lychee)
    ├── axe.yml                 # Accessibility testing (axe-core)
    ├── lighthouse-badger.yml   # Lighthouse performance badges
    └── ...                     # Other utility workflows
```

---

## Build and Development Commands

### Local Development (Native Ruby)

Requires Ruby, Bundler, and ImageMagick installed.

```bash
# Install Ruby dependencies
bundle install

# Serve locally with live reload (development)
bundle exec jekyll serve --watch --livereload

# Build for production
export JEKYLL_ENV=production
bundle exec jekyll build
```

### Local Development (Docker — Recommended)

```bash
# Pull prebuilt image and run
docker compose pull
docker compose up

# Or build image locally
docker compose up --build

# Slim image variant (< 100MB)
docker compose -f docker-compose-slim.yml up
```

The Docker setup mounts the project directory into `/srv/jekyll`, runs Jekyll on port `8080`, and uses `inotifywait` to auto-restart Jekyll when `_config.yml` changes.

### CI Build

```bash
./bin/cibuild   # Equivalent to: bundle exec jekyll build
```

### Manual Deployment

```bash
./bin/deploy    # Interactively deploys built site to gh-pages branch
```

This script:
1. Checks for uncommitted changes.
2. Builds the site with `JEKYLL_ENV=production`.
3. Runs `purgecss` to remove unused CSS.
4. Replaces the working tree with `_site/` contents.
5. Creates `.nojekyll` to bypass GitHub Pages' own Jekyll processing.
6. Force-pushes to `gh-pages` branch.

---

## Code Style Guidelines

### Formatting

- **Prettier** is used for all code formatting.
- The project uses `@shopify/prettier-plugin-liquid` for Liquid template formatting.
- Configuration is in `.prettierrc`:
  - `printWidth: 150`
  - `trailingComma: "es5"`
- All PRs must pass the Prettier check (enforced by `.github/workflows/prettier.yml`).

### Pre-commit Hooks

`.pre-commit-config.yaml` configures:
- `trailing-whitespace` removal
- `end-of-file-fixer`
- `check-yaml`
- `check-added-large-files`

### Liquid / HTML

- Use 2-space indentation.
- Use Liquid tags with consistent spacing: `{% raw %}{% include foo.liquid %}{% endraw %}`.
- Prefer `relative_url` filter for internal links.
- Use `bust_file_cache` or `bust_css_cache` filters for cache-busted asset URLs.

### SCSS

- Variables are defined in `_sass/_variables.scss`.
- Import order in `assets/css/main.scss` matters: variables → themes → layout → base → etc.
- Use `!default` flag for overridable variables.

### Ruby Plugins

- Plugins in `_plugins/` are loaded automatically by Jekyll.
- Keep plugins stateless where possible; use Jekyll's hook system (`Jekyll::Hooks.register`).

---

## Testing and Quality Assurance

### Automated Checks (GitHub Actions)

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| `deploy.yml` | Build + deploy to `gh-pages` | Push/PR to `main`/`master` |
| `prettier.yml` | Code formatting validation | Push/PR to `main`/`master` |
| `broken-links.yml` | Check for dead links (lychee) | Push/PR to `main`/`master` |
| `axe.yml` | Accessibility audit (axe-core) | Manual (`workflow_dispatch`) |
| `lighthouse-badger.yml` | Performance/SEO badges | `page_build` event |
| `codeql.yml` | Security analysis | Scheduled / PR |

### Accessibility

- The theme aims for WCAG compliance.
- Run `axe` workflow manually to audit accessibility.
- Uses semantic HTML, ARIA labels, and keyboard-navigable components.

### Link Checking

- `lychee` checks all `.md` and `.html` files.
- Excludes files with heavy Liquid templating that lychee cannot parse.

---

## Deployment Process

### Automatic (Recommended)

1. Push changes to `main` branch.
2. GitHub Actions `deploy.yml` triggers.
3. The workflow:
   - Sets up Ruby 3.3.5 and Bundler.
   - Sets up Python 3.13 (for `nbconvert`).
   - Installs ImageMagick.
   - Builds the site with `JEKYLL_ENV=production`.
   - Runs PurgeCSS to strip unused CSS.
   - Deploys `_site/` to `gh-pages` branch via `JamesIves/github-pages-deploy-action@v4`.
4. GitHub Pages serves from `gh-pages` branch.

### Manual

Run `./bin/deploy` locally. This is useful for debugging or one-off deployments.

### Important Notes

- The `gh-pages` branch is **auto-generated** and overwritten on every deploy. **Never edit it directly.**
- All user changes must be made on the `main` (or `master`) branch.
- If using a custom domain, add a `CNAME` file to the source branch.
- The `.nojekyll` file is created during deployment to prevent GitHub Pages from running Jekyll a second time.

---

## Key Configuration Files

### `_config.yml`

The single most important file. Key sections:

- **Site settings**: `title`, `url`, `baseurl`, `description`, `lang`
- **Theme**: `repo_theme_light`/`dark`, `repo_trophies`
- **Layout**: `navbar_fixed`, `footer_fixed`, `max_width`, `search_enabled`
- **Blog**: `blog_name`, `permalink`, `pagination`
- **Comments**: `giscus` (recommended), `disqus_shortname` (deprecated)
- **Collections**: `books`, `news`, `projects`
- **Jekyll settings**: `markdown`, `highlighter`, `plugins`, `sass`
- **Jekyll Scholar**: `scholar` (BibTeX style, source, grouping)
- **ImageMagick**: responsive image generation settings
- **Optional features**: analytics, dark mode, math, masonry, etc.
- **3rd party libraries**: versions, CDN URLs, SRI hashes

### `Gemfile`

Defines Ruby gem dependencies. Two groups:
- `:jekyll_plugins` — gems that hook into Jekyll's build process.
- `:other_plugins` — development/data-fetching gems.

### `package.json`

Only dev dependencies for formatting. No runtime JS dependencies.

---

## Content Management Conventions

### Adding News

Create a new file in `_news/` with front matter:

```yaml
---
layout: post
date: 2025-04-14 14:02:09-0000
inline: true
related_posts: false
---
Your news content here.
```

`inline: true` displays it directly on the about page.

### Adding Publications

Add BibTeX entries to `_bibliography/papers.bib`. The `jekyll-scholar` plugin automatically renders them on the publications page.

Supported custom BibTeX fields (filtered from output):
`abbr`, `abstract`, `altmetric`, `annotation`, `arxiv`, `award`, `award_name`, `bibtex_show`, `blog`, `code`, `google_scholar_id`, `html`, `inspirehep_id`, `pdf`, `poster`, `preview`, `selected`, `slides`, `supp`, `video`, `website`.

### Adding Blog Posts

Create a file in `_posts/` named `YYYY-MM-DD-title.md` with front matter:

```yaml
---
layout: post
title: "Post Title"
date: 2025-01-01
description: "Short description"
tags: [tag1, tag2]
categories: category-name
giscus_comments: true
---
```

### Adding Projects

Create a file in `_projects/` with front matter. Use `layout: page` or a custom layout.

### Updating CV

The CV page (`_pages/cv.md`) uses `assets/json/resume.json` (JSON Resume standard) as the primary data source. If that file is missing, it falls back to `_data/cv.yml`.

To use YAML instead of JSON, delete `assets/json/resume.json`.

### Updating Social Links

Edit `_data/socials.yml`. Supported platforms include GitHub, email, ORCID, Google Scholar, LinkedIn, X, and many others. Icons come from Academicons, Font Awesome, and Tabler Icons.

---

## Security Considerations

- All 3rd-party JS/CSS libraries include Subresource Integrity (SRI) hashes in `_config.yml`.
- External links are tagged with `rel="external nofollow noopener"` by `jekyll-link-attributes`.
- The `download-3rd-party.rb` plugin can optionally download CDN assets locally (set `third_party_libraries.download: true`).
- Emails are obfuscated by `jekyll-email-protect`.
- No server-side code runs in production; it is a fully static site.
- GitHub Actions workflows use minimal permissions (`contents: write` for deploy).

---

## Common Issues and Fixes

| Issue | Solution |
|-------|----------|
| CSS/JS not loading after deploy | Check `url` and `baseurl` in `_config.yml`. Clear browser cache. |
| `Unknown tag 'toc'` on deploy | Ensure deployment branch is `gh-pages`, not `main`. |
| Atom/RSS feed broken | Verify `title`, `url`, `description` are set in `_config.yml`. |
| Related posts error (`Zero vectors`) | Add `related_posts: false` to offending post front matter, or disable `lsi`. |
| Prettier check fails on PR | Run `npx prettier . --write` locally and commit changes. |
| Docker permission errors | Uncomment user/group args in `Dockerfile` and `docker-compose.yml`. |

For more, see `FAQ.md` and `INSTALL.md` in the project root.

---

## External Resources

- [al-folio Repository](https://github.com/alshedivat/al-folio)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [JSON Resume Schema](https://jsonresume.org/)
- [Jekyll Scholar](https://github.com/inukshuk/jekyll-scholar)
