# Framed

`Framed` is the project layer inside `Test` for multi-window access to external services.

The project is not limited to ChatGPT. ChatGPT is the first provider-specific implementation, but the architecture must allow adding other providers, sites, and applications later.

## Domain Layout

- Root domain: `expert-e-t.com`
- Base project domain: `test.expert-e-t.com`
- Framed project domain: `framed.test.expert-e-t.com`
- ChatGPT provider domain: `chatgpt.framed.test.expert-e-t.com`

## Product Model

- Users register on the operator's site.
- Users authenticate with a provider only through the provider-owned surface.
- The operator must not receive or store provider credentials.
- The first provider target is ChatGPT.
- Future provider targets must fit the same multi-frame workspace model.

## Frame Tiers

- 2 frames: free tier
- 3 frames: low-cost tier
- 4 frames: higher-cost tier

## Current Focus

Build the ChatGPT provider implementation first while keeping the provider abstraction visible in the project structure.
