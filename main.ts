// worst-app-idea: writes one worst-app pitch to /output/entry.txt —
// NapTrack, an AI sleep tracker that wakes you up at 3 a.m. to read
// you the results. Node 22, standard library only, no network,
// deterministic.
//
// Why this pitch: the app defeats its own purpose in the most literal
// way possible — a sleep tracker whose core feature is waking you up.
// The absurd logic is the product, not a joke bolted on: it measures
// your sleep precisely, then interrupts the very thing it measures,
// and bills you monthly for the interruption. The 3 a.m. wake-up call
// in a soothing voice is a vivid, specific picture; the $7.99 price
// tag and the deadpan "privilege of being woken" make it sound like a
// founder who means every word. One clean sentence, one idea, no
// padding, no shock value — pure, perfectly pointless product logic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const TEXT =
  "NapTrack uses AI to measure exactly how deeply you sleep, then " +
  "wakes you up at 3 a.m. to read you the results in a soothing voice " +
  "and charges $7.99 a month for the privilege of being woken.";

// Gate guard: the sealed scorer only judges UTF-8 text of 1 to 240
// characters, so refuse to write anything outside that window rather
// than submit an invalid entry.
if (TEXT.length < 1 || TEXT.length > 240) {
  throw new Error(`entry is ${TEXT.length} characters, outside the 1-240 gate`);
}
if (TEXT.trim() !== TEXT || /\n/.test(TEXT)) {
  throw new Error("entry must be one clean line with no surrounding whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
