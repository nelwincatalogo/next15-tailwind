# Next.js 15 Tailwind Template

A modern, feature-rich starter template for Next.js 15 with Tailwind CSS, TypeScript, ESLint, and Prettier.

## Features

- ⚡ **Next.js 15** - The latest version with App Router
- 🎨 **Tailwind CSS 4** - For utility-first styling
- 🔥 **Turbopack** - For faster development experience
- ⚛️ **React 19** - Latest React version
- 📝 **TypeScript** - Type safety with full configuration
- 🧹 **ESLint & Prettier** - Code quality and formatting
- 🔍 **Import Sorting** - Organized imports with @ianvs/prettier-plugin-sort-imports
- 🎭 **Husky & Git Hooks** - Pre-commit checks
- 🔤 **Google Fonts** - Geist Sans and Geist Mono
- 🛠️ **VSCode Configuration** - Optimized editor settings
- 🔗 **Path Aliases** - Absolute imports with `@/` prefix

## Installation

Create a new project using this template with either yarn or npx:

```bash
# Using yarn
yarn create next-app [project-name] -e https://github.com/nelwincatalogo/next15-tailwind

# Using npx
npx create-next-app [project-name] -e https://github.com/nelwincatalogo/next15-tailwind
```

## Getting Started

### Package Manager: `yarn`

- Install dependencies: `yarn` or `yarn install`
- Add new dependencies: `yarn add <package-name>`
- Remove dependencies: `yarn remove <package-name>`
- Run scripts from package.json: `yarn <script-name>` or `yarn run <script-name>`

### Development Scripts

- `yarn dev` - Run development server with Turbopack
- `yarn build` - Build production bundle
- `yarn start` - Start production server

### Code Quality Tools

- `yarn lint` - Run ESLint to check for code issues
- `yarn lint:fix` - Run ESLint with automatic fixes
- `yarn format` - Run Prettier to format code changes
- `yarn format:staged` - Run Prettier to format staged code changes

### Git Hooks (husky)

This template includes pre-configured Git hooks:

```bash
# pre-commit: Formats staged code and ensures build succeeds
yarn format:staged
yarn build
```

## Project Structure

- `src/app/` - Next.js App Router
- `src/components/` - UI components
- `public/` - Static assets
- `.vscode/` - Editor configuration
- `.husky/` - Git hooks

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `postcss.config.mjs` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `extensions.json` - VSCode recommended extensions
- `settings.json` - VSCode editor settings

## Path Aliases

This template is configured with TypeScript path aliases for cleaner imports:

```typescript
// Instead of this:
import { Button } from '../../../components/ui/button';

// You can use this:
import { Button } from '@/components/ui/button';
```

## VSCode Integration

This template includes recommended extensions and optimized settings for VSCode.
