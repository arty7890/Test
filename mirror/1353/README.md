# 1353 B000 compression-percent naming fix

Theme: B000 introductory part of the court-facing document.

Internal archive: 1353v1353_b000_NewLegislative_c6_100pct_36864K_10_3f36.tar.xz
SHA-256: 3f3613a5412c8177c716b1d9d1d0ad4fa937605a383ee2c687012b9072dc1a1e

Correction:
- Prior archive 1352 used XZ but did not show the actual compression percent/result in the filename.
- xz -l showed ratio about 0.999/1.000, meaning the archive is approximately 100 percent of the uncompressed tar size after compression.
- Current filename includes `100pct`.

Norm:
If compression result is known, the export name must show it or the response must explicitly explain why it is absent. File extension alone is not enough because it only shows method, not effective compression.

Mirror status: this README records the GitHub mirror attempt for release 1353.
