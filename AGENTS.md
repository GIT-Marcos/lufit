## Development

Start the dev server:

```
npm run dev
```

For background mode (useful when working via agent):

```
npx astro dev --background
```

Manage the background server:
- `npx astro dev stop`
- `npx astro dev status`
- `npx astro dev logs`

Other commands:
- `npm run build` — build to `./dist/`
- `npm run preview` — preview production build locally
- `npm run astro` — run any Astro CLI command (e.g., `npm run astro add`, `npm run astro check`)

## Requirements

- Node.js >= 22.12.0 (from `package.json` `engines`)

## Notes

- Clean Astro 7 starter scaffold — no UI framework, no Tailwind, no content collections, no tests, no linter, no formatter.
- Single dependency: `astro`. Add integrations via `npx astro add`.
- Type checking available via `npx astro check`.
