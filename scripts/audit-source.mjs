import { readdir,readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { auditFiles } from './content-policy.mjs';
const issues=[];
async function walk(dir){
  for(const entry of await readdir(dir,{withFileTypes:true})){
    const path=join(dir,entry.name);
    if(entry.isSymbolicLink()){issues.push(`${path}: symbolic link`);continue;}
    if(entry.isDirectory()){await walk(path);continue;}
    const text=/\.(astro|ts|js|mjs|css|svg|txt)$/i.test(path)?await readFile(path,'utf8'):'';
    issues.push(...auditFiles([{path,text}]));
    if(/cimo-(?!placeholder\.svg)[^/]*\.(webp|png|jpe?g|svg)/i.test(path))issues.push(`${path}: unpublished project image`);
    if(/Under review at|AAAI 2027|sparse causal interaction graph|Graph perturbations|Col-MSE|PostCol-MSE/i.test(text))issues.push(`${path}: unpublished project details`);
  }
}
await walk('src');await walk('public');
for(const directory of ['work','review-assets','private','docs']){
  try{await readdir(directory);issues.push(`${directory}: local-only directory in release source`);}catch(error){if(error.code!=='ENOENT')throw error;}
}
if(issues.length)throw new Error(`Release source audit failed:\n${issues.join('\n')}`);
console.log('Release source audit passed: source comments and public assets checked.');
