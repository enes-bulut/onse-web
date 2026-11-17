# Ontology-Native Software Engineering

An independent, non-commercial technical research website. The design and research content are carried over from Ontology as Software, with the new project name and no contact email or email buttons. The self-assessment uses only in-memory browser state; answers are never transmitted or persisted.

## Local development

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Static build and preview

```sh
npm test
npm run preview
```

The publishable website is in `out/`. The preview serves it at http://localhost:3000/; use `PORT=3002 npm run preview` if that port is occupied.

## Publish with GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source.
3. Run the **Publish GitHub Pages** workflow (or push to `main`).

The included workflow installs dependencies, lints, tests the static export, and deploys `out/`. It obtains the publishing URL from GitHub Pages automatically, supporting both repository subpaths and custom domains configured in Pages. If your default branch differs, update `.github/workflows/pages.yml`.

For a local build that matches a repository URL, set the complete URL, including the repository subpath:

```sh
NEXT_PUBLIC_SITE_URL=https://YOUR-ACCOUNT.github.io/onse-web/ npm test
NEXT_PUBLIC_SITE_URL=https://YOUR-ACCOUNT.github.io/onse-web/ npm run preview
```

For a custom domain use `NEXT_PUBLIC_SITE_URL=https://your-domain.example/`. This setting controls canonical URLs, social images, discovery files, and all asset prefixes. The fallback URL is localhost for development; the GitHub workflow always supplies the actual publishing URL. Source discovery files contain `__SITE_URL__` tokens which are resolved in `out/` by the build.

No Cloudflare worker, database, server runtime, or authentication service is required. The original source repository and its Git history are not included.

Static export setup follows the [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports) and [GitHub Pages custom workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
