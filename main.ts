// g290-worst-app — entry for "The Worst App Idea Ever Pitched" on make.fun.
// Writes one sentence (230 chars, within the 1-240 gate) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "FridgePeek is a $4.99-a-month app that texts busy professionals a photo of their own fridge every time they open it, so they can confirm from the office, in real time, that the milk they already know is in there is still in there.";

// Gate check: 1-240 UTF-8 characters, not only whitespace, one sentence.
const length = [...ENTRY].length;
if (length < 1 || length > 240 || !ENTRY.trim()) {
  throw new Error(`entry length ${length} fails the 1-240 char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${length} chars to /output/entry.txt`);
