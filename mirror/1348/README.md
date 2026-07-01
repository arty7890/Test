# 1348 B000 size fix export

Theme: B000 introductory part of the court-facing document.

Internal archive: 1348v1348_b000_NewLegislative_c6_2K_7_6a51.tar.xz
SHA-256: 6a51f28b678e0ca3c2bd9cdf475b650c5dec13a91628a6cc893e345a7c9f6599

Correction: the previous 36MB export was too large for a normal queue export. The likely cause was embedding bulky source artifacts and/or prior archives directly. The corrected strategy is compact migration by current state + inventory + references, with bulky artifacts embedded only when newly required.

GitHub mirror attempt: this README is the mirror attempt for release 1348.
