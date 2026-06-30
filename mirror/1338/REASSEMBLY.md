# Restore guide for GitHub mirror chunks

The project archive is stored in GitHub as text chunks. Put the chunk files from mirror/1338/base64 in lexical order, join them into one Base64 text file, decode that file, and then check SHA-256.

Release: 1338
Archive name: 1338v1338_b000_NewLegislative_c6_791K_88_8ea6.tar.xz
Expected archive SHA-256: 8ea61941622ea5360c4fdb85022452d23938038fc1f87df1529d2e5262118192
Expected archive size: 809228 bytes
Expected chunk count: 5

Chunk order:
1. mirror/1338/base64/part_00.b64
2. mirror/1338/base64/part_01.b64
3. mirror/1338/base64/part_02.b64
4. mirror/1338/base64/part_03.b64
5. mirror/1338/base64/part_04.b64

Linux or macOS restore commands:
cat mirror/1338/base64/part_*.b64 > 1338_archive_base64.txt
base64 -d 1338_archive_base64.txt > 1338v1338_b000_NewLegislative_c6_791K_88_8ea6.tar.xz
sha256sum 1338v1338_b000_NewLegislative_c6_791K_88_8ea6.tar.xz
tar -xJf 1338v1338_b000_NewLegislative_c6_791K_88_8ea6.tar.xz

Windows PowerShell restore steps:
1. Join the five part_XX.b64 files in order into one text file.
2. Decode the joined Base64 text into the .tar.xz archive.
3. Run Get-FileHash with SHA256.
4. Compare the hash with the expected SHA-256 above.

Future branch rule:
Every mirrored release should include export_manifest.md, this reassembly guide or an equivalent guide, ordered base64 chunk files, archive size, chunk count, and SHA-256. A mirror is complete only if the restored archive hash matches the manifest.
