# TODO: Giscus comments (requested 2026-10-08, not yet implemented)

Add comment threads to blog post pages using Giscus, backed by GitHub Discussions
in this repo — keeps the site fully static and completely on GitHub.

Notes:
- Requires enabling Discussions on the repo and installing the Giscus app
  (github.com/apps/giscus) — repo-owner steps.
- Load lazily (only when a reader scrolls to comments) to keep post pages light.
- Theme should follow the site light/dark toggle.

(Filing as a real GitHub issue needs Issues:write on the token; the saved PAT
is read-scoped, so this file is the placeholder until then.)
