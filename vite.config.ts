import process from "node:process";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

function normalizeBasePath(basePath: string) {
  const trimmedBasePath = basePath.trim();

  if (!trimmedBasePath || trimmedBasePath === "/") {
    return "/";
  }

  return `/${trimmedBasePath.replace(/^\/+|\/+$/g, "")}/`;
}

function resolveBasePath() {
  const explicitBasePath = process.env.GITHUB_PAGES_BASE_PATH;

  if (explicitBasePath) {
    return normalizeBasePath(explicitBasePath);
  }

  if (process.env.GITHUB_ACTIONS === "true") {
    const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

    if (repositoryName) {
      return repositoryName.endsWith(".github.io") ? "/" : `/${repositoryName}/`;
    }
  }

  return "/";
}

export default defineConfig({
  base: resolveBasePath(),
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
      },
    }),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    viteReact(),
  ],
});
