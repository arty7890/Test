# 1339 export manifest

Project: B000 NewLegislative
Archive: 1339v1339_b000_NewLegislative_c6_711K_98_087f.tar.xz
Archive bytes: 727620
Archive SHA-256: 087f94d062212ecf5659c5122eb6ccf785ed927838394b7e68a0b94810a46a60
Internal path: /mnt/data/1339v1339_b000_NewLegislative_c6_711K_98_087f.tar.xz

External mirror policy:
- Google Drive is not used.
- GitHub repository arty7890/Test is used as external mirror.

Mirror state:
- Manifest: published and update path verified.
- Reassembly guide: repository-level guide exists; release-level guide is required for a complete release mirror.
- Full base64 chunk publication: pending.

Kontur prevention fix:
- Before writing an existing GitHub file, Kontur must fetch the file and read its current SHA.
- If the file exists, Kontur must use update_file with that SHA.
- If the file does not exist, Kontur must use create_file.
- This prevents the repeated 422 error caused by trying to create an already existing path.

Export success rule:
- Internal export is successful only with a downloadable sandbox link.
- GitHub mirror is successful only when manifest, reassembly guide, and all archive chunks are published and reconstructable with matching SHA-256.
- Until then, GitHub mirror status is partial, not successful.
