const appBasePath = import.meta.env.BASE_URL;

export function withBasePath(path: string) {
  const normalizedBasePath = appBasePath === "/" ? "" : appBasePath.replace(/\/$/, "");

  if (!path || path === "/") {
    return normalizedBasePath ? `${normalizedBasePath}/` : "/";
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return normalizedBasePath ? `${normalizedBasePath}${normalizedPath}` : normalizedPath;
}