# Framed ChatGPT

This folder contains the first provider-specific implementation for `Framed`.

## Target Domain

`chatgpt.framed.test.expert-e-t.com`

## Scope

- Multi-frame page for simultaneous ChatGPT workspaces.
- Initial supported layouts: 2, 3, and 4 visible frames.
- Visual indication of which frame has received a response.
- No third-party credential-handling service.
- OpenAI-owned authentication surface or own implementation only.

## Constraint

This implementation must not assume that `Framed` is only for ChatGPT. Shared logic should remain one level above this folder when it can apply to other providers.
