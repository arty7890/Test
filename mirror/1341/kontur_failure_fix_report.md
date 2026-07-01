# 1341 Kontur failure fix report

Status: corrective report.

Detected failures:

1. Delta-underlining audit did not block the response.
2. Newly added B000 points were not fully marked with pseudo-link underlining.
3. Internal export was presented without a working sandbox link in one turn.
4. GitHub deferral was reported without a proven write-attempt sequence.

Root cause:

The Kontur operational checklist existed, but the delta-underlining gate and export-link gate were not enforced as hard pre-publication blockers. The GitHub timeout rule was also applied as a shortcut rather than as attempt-first-then-timeout logic.

Fix:

1. Added hard gate: any newly added B000 point shown in Goals must be fully wrapped as a pseudo-link delta.
2. Added hard gate: Internal export cannot be marked successful without a downloadable sandbox link.
3. Added hard gate: GitHub can be deferred only after an actual write attempt or access check has been started and failed or timed out.
4. Added rule: if GitHub permission is not obtained within the time limit, continue Internal export and do not block the queue.

Operational status:

Kontur remains in production, but this report creates a corrective sub-version for enforcement gates.
