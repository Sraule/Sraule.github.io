# Sraule.github.io

Astro + Tailwind CSS + TypeScript academic homepage for Sraule.

Planned website: https://sraule.github.io/ — this source copy has not been uploaded or deployed.

## Local development

Use Node.js 24. Run `npm ci`, then `npm run dev`.
Before publication, run `npm test`, `npm run check`, and `npm run build`.
`dist/` is the static website. `node scripts/create-offline-preview.mjs` creates an offline review copy in `outputs/`.

## Content maintenance

- `src/data/profile.ts`: public identity, education, email, and skills.
- `src/data/home.ts`: introductory text and independent research interests.
- `src/data/projects.ts`: project summaries and order.
- `src/data/lemon.ts`, `src/data/projectStudies.ts`: research figures, methods, and evaluation summaries.
- `src/components/Skills.astro`, `src/styles/global.css`: skills layout, typography, and colors.

CIMO is a brief thematic placeholder. Add further material only after sharing permission is confirmed.
The source audit checks both source comments and public assets. Keep local research notes and original documents outside this repository.

## GitHub Pages

1. Create the `Sraule/Sraule.github.io` repository and upload this source copy.
2. Open Settings → Pages → Source and choose GitHub Actions.
3. Review public text, all figures, avatar, emblem, and publication labels.
4. In Actions, manually run **Review-approved GitHub Pages release** and check the content approval input.

Pushing source changes does not deploy this site. The workflow is manual-only.
The workflow derives the site URL and base path from GitHub Pages metadata; local builds default to https://sraule.github.io/.

Font license: `public/fonts/Inter-LICENSE.txt`.
