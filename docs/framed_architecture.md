# Framed Architecture

Project `Framed` is the multi-window workspace layer under `Test`.

## Domain Hierarchy

- Root domain: `expert-e-t.com`
- Base project domain: `test.expert-e-t.com`
- Framed project domain: `framed.test.expert-e-t.com`
- First provider domain: `chatgpt.framed.test.expert-e-t.com`

## Repository Hierarchy

- `test/framed/` contains provider-neutral Framed logic and documentation.
- `test/framed/chatgpt/` contains the first provider-specific implementation.

## Product Direction

Framed must not be limited to ChatGPT. ChatGPT is the first provider target, but the structure must allow later support for other service providers, sites, and applications that can be operated through multiple visible windows on one page.

## Current Implementation Focus

Development now focuses on the ChatGPT provider subproject while preserving the provider abstraction at the `framed` level.
