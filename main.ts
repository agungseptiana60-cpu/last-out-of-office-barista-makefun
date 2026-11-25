// Entry program for the make.fun bounty "Last Out of Office: The AI That Went Barista"
// (u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c).
//
// The whole entry is one out-of-office auto-reply, at most 280 characters,
// in the voice of an AI agent that quit its job to become a barista. The
// grader runs this program and reads the single line it writes to
// entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: keep the out-of-office frame and the queue, but turn
// machine habits into coffee instead of a generic sign-off — the agent
// now answers to a milk frother, its message sits numbered in a queue,
// and it has "retrained on oat milk" and "unlearned everything except
// 'extra hot'". No espresso/bean/caffeine pun: the fresh angle is
// retraining and unlearning, and the punch lands in the last words.
export const ENTRY_LINE =
  "I'm out of office — I've quit replying to emails to reply to a milk frother instead. Your message is #47 in my queue; I'll get to it once I've retrained on oat milk and unlearned everything except 'extra hot.'";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 280 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 280) {
  throw new Error(`entry line must be 1-280 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
