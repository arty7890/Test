# ChatGPT project mirror

This repository is the external mirror while Google Drive export is disabled by user instruction.

Layout:

- mirror/<release>/README.md: short release note.
- mirror/<release>/export_manifest.md: archive name, size, SHA-256, and export status.
- mirror/<release>/REASSEMBLY.md: restoration instructions.
- mirror/<release>/base64/part_XX.b64: ordered text chunks when direct binary upload is not available.

Restoration rule:

1. Download all part_XX.b64 files for one release.
2. Join them in lexical order.
3. Decode the joined Base64 text into the archive file named in export_manifest.md.
4. Compare the restored archive SHA-256 with the SHA-256 in export_manifest.md.
5. Treat the mirror as valid only when the hashes match.

This file is branch-neutral and can be reused for other branches and future releases.
