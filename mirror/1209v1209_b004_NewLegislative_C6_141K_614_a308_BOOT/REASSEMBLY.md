# Restore guide for 1209 GitHub mirror chunks

Release: 1209v1209_b004_NewLegislative_C6
Archive: 1209v1209_b004_NewLegislative_C6_141K_614_a308_BOOT.tar.xz
Expected SHA-256: a308629b59f41aa9f055a19c189a800902bf1b2f2de559c7261b8a894979a448
Expected chunk count: 4

Restoration rule:
1. Download all files from base64/part_XX.b64.
2. Join them in lexical order from part_00.b64 to the last part.
3. Decode the joined Base64 text into the archive named above.
4. Compare the restored archive SHA-256 with the expected SHA-256 above.
5. Treat the mirror as valid only when the hashes match.
