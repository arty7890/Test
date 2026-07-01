# 1354 B000 compression-position corrected export

Theme: B000 introductory part of the court-facing document.

Internal archive: 1354v1354_b000_NewLegislative_c6_33878K_20%_6572_e8bb.tar.xz
SHA-256: e8bb7af61fa42aeb7ded9cf7f9d644b4a138489bf5e227269d5aeeb7188f3d91

Corrected naming:
- The compression percent must appear after archive size and before file count.
- Correct pattern: serial_branch_project_c6_<size>K_<percent>%_<filecount>_<hash>.tar.xz
- The previous placement c6_100pct_<size>K was wrong.

Compression correction:
- Method: tar + xz level 6.
- Raw tar size: 174407680 bytes.
- Compressed size: 34690400 bytes.
- Effective ratio: 20%.
- The prior nested-compressed-archive strategy was corrected by expanding the migration base instead of nesting prior .tar.xz as the main payload.

Mirror status: this file records the GitHub mirror attempt for release 1354.
