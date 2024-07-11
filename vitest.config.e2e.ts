import tsConfigPaths from 'vite-tsconfig-paths'
// eslint-disable-next-line
// @ts-ignore
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
    include: ['**/*.e2e-spec.ts'],
    environmentMatchGlobs: [['src/infra/**', 'prisma']],
  },
})
