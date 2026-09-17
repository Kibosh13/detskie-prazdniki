export const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${githubPagesBasePath}${path}`;
}
