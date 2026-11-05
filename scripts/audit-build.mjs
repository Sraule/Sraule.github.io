import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { auditFiles } from './content-policy.mjs';

async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(async e => {
    const path = join(dir, e.name);
    if (e.isDirectory()) return collect(path);
    return [{ path: relative('dist', path), text: /\.(html|js|json|txt|svg|xml)$/i.test(path) ? await readFile(path, 'utf8') : '' }];
  }))).flat();
}
const files = await collect('dist');
const issues = auditFiles(files);
if (issues.length) throw new Error(`Publication audit failed:\n${issues.join('\n')}`);
console.log(`Publication audit passed: ${files.length} files; phone, source-document, and withheld-text checks passed; figure permissions require human review.`);
