// Monday Morning Punchlines — one joke about Monday mornings.
// The joke is built from a setup and a punchline so each part can be
// tuned on its own; the program writes the single joined line.
const SETUP = "I hired five alarms for Monday morning.";
const PUNCHLINE = "Four walked out — the fifth unionised and now charges me rent.";
const JOKE = `${SETUP} ${PUNCHLINE}`;

// The grader reads /output/entry.txt; ENTRY_OUT_DIR only exists so local
// runs can point at an isolated directory instead of the shared /output.
const OUT_DIR = process.env.ENTRY_OUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
