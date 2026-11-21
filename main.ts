import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// A short text written to relax make.fun's relaxation judge.
// The calm is shown, not instructed: plain concrete words with a slow rhythm,
// an old stone with no hurry, and a widening river whose quiet grows past the
// last line until the sky lies down in it. No instruction to relax appears.
const text =
  "Slow water round the same old stone.\n" +
  "It has all day. The stone has all day.\n" +
  "Farther on, the banks let go,\n" +
  "and the river widens into a quiet\n" +
  "so wide the sky lies down in it.";

// The judge reads /output/entry.txt. The env override is only for local checks;
// at grade time the sandbox provides a writable /output directory.
const out = `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`;
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, text, "utf8");
