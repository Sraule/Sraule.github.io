import test from 'node:test';
import assert from 'node:assert/strict';
import { auditFiles } from '../scripts/content-policy.mjs';

test('publication audit permits the intended homepage and image assets', () => {
  assert.deepEqual(auditFiles([{path:'index.html',text:'Lei Shen LEMON StageScope CIMO Causal video prediction shen_lei@sjtu.edu.cn'},{path:'images/lemon.webp'}]), []);
});
test('publication audit rejects withheld manuscript details in HTML and scripts', () => {
  assert.ok(auditFiles([{path:'index.html',text:'Anonymous submission'}]).length);
  assert.ok(auditFiles([{path:'_astro/main.js',text:'CLEVRER-CF'}]).length);
});
test('publication audit rejects raw source documents and private phone contacts', () => {
  assert.ok(auditFiles([{path:'images/anonymous.pdf'}]).length);
  assert.ok(auditFiles([{path:'index.html',text:'Call +86 138 0013 8000'}]).length);
  assert.ok(auditFiles([{path:'index.html',text:'href="tel:123456"'}]).length);
});
