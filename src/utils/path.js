export function getAssetPath(path) {
  const BASE = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${BASE}${cleanPath}`;
}


