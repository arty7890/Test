# Restore guide for GitHub mirror chunks

The project archive is stored in GitHub as text chunks. Put the chunk files from mirror/1196/base64 in lexical order, join them into one Base64 text file, decode that file, and then check SHA-256.

Release: 1196
Archive name: 1196v1196_b006_NewLegislative_C6_624K_1274_0ba5_BOOT.tar.xz
Expected archive SHA-256: 0ba57499c159c76a42b00a0a0cbc3bc4ea3af5ea808b281442dd2d76153e4f60
Expected archive size: 638844 bytes
Expected chunk count: 9

Linux or macOS restore commands:
cat mirror/1196/base64/part_*.b64 > 1196_archive_base64.txt
base64 -d 1196_archive_base64.txt > 1196v1196_b006_NewLegislative_C6_624K_1274_0ba5_BOOT.tar.xz
sha256sum 1196v1196_b006_NewLegislative_C6_624K_1274_0ba5_BOOT.tar.xz
tar -xJf 1196v1196_b006_NewLegislative_C6_624K_1274_0ba5_BOOT.tar.xz

Mirror validity rule: the mirror is complete only if all 9 chunk files are present and the restored archive hash matches the expected SHA-256.
