/**
 * Minimal flat ESLint config for this project.
 *
 * Note: We intentionally avoid importing `eslint-config-next/core-web-vitals`
 * because that subpath is not available in the current environment and causes
 * Vercel build-time module resolution errors.
 */
export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**"]
  }
];
