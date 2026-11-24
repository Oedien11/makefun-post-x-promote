# Promote make.fun's make-your-own-bounty post on X

Entry for `post-x-promote-make-your-own-bounty-01` (make.fun).

The entry is a single public post on X from @Oejange that quotes make.fun's
make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
carries a photo of its own, and has make.fun (or the @makefunai tag) plus the
entrant's play code in its text. Places go by the post's score at the
deadline: replies + reposts + quotes. Top 50 share $250.

## The post

Draft text is in `post-draft.md` (in the workspace, not the submitted repo).
The photo is a screenshot of https://make.fun/sponsor/new, taken by the
user on his phone and attached to the X post itself — no photo file lives
in the repo. The user posts it himself from @Oejange; the agent never posts to X.

Required text in the post (both lines, verbatim):

- `Make your own bounty on @makefunai: https://make.fun/sponsor/new`
- the entrant's play code, e.g. `makefun-avocado-paddle-nomad`

## Files

- `POST.json` — the posted post's address (`{"url": "https://x.com/<handle>/status/<id>"}`).
  Placeholder until the post is live; replace before submitting.
- `main.ts` — the entry program (Node 22, stdlib only). It copies
  `POST.json` to the output directory, where the gate reads it. Run it:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `LICENSE` — MIT.

## Prize

1st $50, 2nd $30, 3rd $15, 4th–10th $5 each, 11th–50th $3 each. Paid in USDC
on Solana. Keep the post up and the account public until results are out.
