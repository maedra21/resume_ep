/** Encode a public URL so filenames with spaces still resolve. */
export function publicAsset(path: string): string {
  if (!path) return path;
  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const cut = [hashIndex, queryIndex].filter((i) => i >= 0).sort((a, b) => a - b)[0];
  const base = cut === undefined ? path : path.slice(0, cut);
  const rest = cut === undefined ? "" : path.slice(cut);
  const encoded = base
    .split("/")
    .map((segment, index) => (index === 0 && segment === "" ? "" : encodeURIComponent(segment)))
    .join("/");
  return encoded + rest;
}
