export function normalizePath(path: string) {
  const p = path.replace(/\/index\.html$/, '').replace(/\/+$/, '');
  return p || '/';
}
