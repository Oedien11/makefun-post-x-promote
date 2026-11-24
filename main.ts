// post-x-promote-make-your-own-bounty-01 — entry program (Node 22, standard library only).
//
// The entry is the X post itself: one public post from @Oejange that quotes
// (or links to) make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), with a photo of its
// own attached, make.fun (or the @makefunai tag) and the entrant's play code
// in its text. POST.json at the repository root names that post.
//
// This program copies POST.json to the output directory, where the gate
// reads it. That is all it has to do: the house reads the post and its
// counts (replies + reposts + quotes) from X itself, and nothing this
// program writes about the post is scored.
//
// Local run (mirrors the grader's layout):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

// Read the entry's post address, confirm it is a JSON object carrying a
// string url, and copy it byte-for-byte to the output directory so both
// runs of the entry write the same bytes.
const raw = readFileSync(SOURCE, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('POST.json must carry a "url" string naming the entry post on X');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(TARGET, raw);

// Note: until the post is live on X, POST.json holds the placeholder
// address from the kit. Replace it with the real post address
// (https://x.com/Oejange/status/<id>) before submitting; the gate
// refuses the placeholder, and a post's text and photo cannot be
// changed once it is up, so the address goes in only after posting.
