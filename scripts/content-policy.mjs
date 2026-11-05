// Defense in depth for generated assets; this does not replace content review.
export function auditFiles(files) {
  const issues = [];
  for (const { path, text = '' } of files) {
    if (/\.(pdf|pptx?|docx?)$/i.test(path)) issues.push(`${path}: source document`);
    if (/CLEVRER|SupplementaryMaterial|Anonymous submission|interventor/i.test(path + text)) issues.push(`${path}: restricted research content`);
    if (/tel:|(?:\+?86[ -]?)?1[3-9]\d[ -]?\d{4}[ -]?\d{4}/.test(text)) issues.push(`${path}: phone contact`);
  }
  return issues;
}
