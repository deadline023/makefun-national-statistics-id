// DataNusa — entry program. The site itself is the static app/ folder next
// to this file (plain HTML/CSS/ES modules, no build step, nothing loaded
// over the network). This program hands it in: it copies app/ and
// screenshots/ into the output directory and writes dossier.json there
// with the vendored make.fun library, exactly as the scorer expects.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The output directory is a mount in the grader: create it if missing,
// never remove it. Only the subpaths this program owns are refreshed.
mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });
}

// The dossier is the judge's summary of the hand-in: screenshots, the
// first load's files and bytes, and the source outline. Its caps are the
// scorer's own (at most 4 screenshots of at most 256 KiB each; the app
// tree far below the file and byte ceilings), and the bytes must be
// exactly what the vendored library writes, so vendor/ stays untouched.
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, { text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 }, app_max_files: 993, app_max_bytes: 16777216 }),
);
