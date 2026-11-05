import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Run after a root-path build. Creates a portable, self-contained review copy.
let html = await readFile('dist/index.html', 'utf8');
for (const match of [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)]) {
  const href = match[0].match(/href="([^"]+)"/)?.[1];
  if (href) html = html.replace(match[0], `<style>${await readFile(join('dist', href.replace(/^\//,'')), 'utf8')}</style>`);
}
for (const match of [...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)]) {
  const code = await readFile(join('dist', match[1].replace(/^\//,'')), 'utf8');
  html = html.replace(match[0], `<script type="module">${code}</script>`);
}
for (const match of [...html.matchAll(/(?:src|href)="(\/(?:images\/|favicon\.svg)[^"]+)"/g)]) {
  const path = match[1];
  const mime = path.endsWith('.svg') ? 'image/svg+xml' : path.endsWith('.webp') ? 'image/webp' : /\.jpe?g$/i.test(path) ? 'image/jpeg' : 'image/png';
  const data = await readFile(join('dist',path.replace(/^\//,'')));
  html = html.replaceAll(path, `data:${mime};base64,${data.toString('base64')}`);
}
// Preserve the locally hosted typeface in the portable review file.
for (const match of [...html.matchAll(/url\(["']?([^\s)"']+\.woff2)["']?\)/g)]) {
  const path = match[1];
  const data = await readFile(join('dist', path.replace(/^\//, '')));
  html = html.replaceAll(path, `data:font/woff2;base64,${data.toString('base64')}`);
}
await mkdir('outputs', { recursive: true });
await writeFile('outputs/preview.html', html);
console.log('Wrote self-contained outputs/preview.html');
