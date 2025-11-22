# Next.js 15 Tailwind Template

A modern, feature-rich starter template for Next.js 15 with Tailwind CSS, TypeScript, Oxlint, and Prettier.

## Features

- ⚡ **Next.js 15** - The latest version with App Router
- 🎨 **Tailwind CSS 4** - For utility-first styling
- 🔥 **Turbopack** - For faster development experience
- ⚛️ **React 19** - Latest React version
- 📝 **TypeScript** - Type safety with full configuration
- 🧹 **Oxlint & Prettier** - Code quality and formatting
  - React, Next.js, TypeScript, JSX A11y, and Import plugins
  - Unused imports detection
  - Tailwind CSS plugin
- 🔍 **Import Sorting** - Organized imports with @ianvs/prettier-plugin-sort-imports
- 🎭 **Husky & Git Hooks** - Pre-commit checks
- 🔤 **Fonts** - Geist Sans, Geist Mono, Poppins, and Inter
- 🛠️ **VSCode Configuration** - Optimized editor settings
- 🔗 **Path Aliases** - Absolute imports with `@/` prefix
- 📦 **Shadcn UI** - Reusable UI components with customizable styles
- ✨ **Custom UI Components** - Additional custom-built UI components
  - Advanced Date Range Picker
  - Custom Badge component
  - Responsive dialogs and drawers
- 🛠️ **Common Components** - Reusable components like loading indicators and icons
  - LoadingDots, LoadingButton, LoadingFull components
  - Alert dialogs and notifications
- 📚 **Sample Components** - Examples including React Query integration
- 🌐 **API Handling** - Setup for making API calls
- ⚙️ **Environment Variables** - Configuration using `env.ts` with Zod validation
- 🎣 **Custom Hooks** - Useful hooks like `use-mobile`, `useSession`, and various utilities
- 🔧 **Utility Functions** - Common helper functions
- 🔌 **Context Providers** - Including React Query and App state management
- 💾 **State Management** - Using Hookstate with persistence
- 🗺️ **Address Data** - JSON files for address information
- 🍞 **Toast Notifications** - Using Sonner for beautiful toast notifications
- 🔄 **TanStack Query** - For efficient data fetching and caching
- 🔍 **React Scan** - Development tool for component inspection
- 📄 **Static Export Support** - Option to export as static HTML/CSS/JS
- 🧩 **Feature-based Organization** - Components organized by feature and type

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
- `yarn start:static` - Serve static export using serve

### Code Quality Tools

- `yarn lint` - Run Oxlint to check for code issues
- `yarn lint:fix` - Run Oxlint with automatic fixes and format code
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
  - `common/` - Shared components like loading indicators
  - `samples/` - Example components
  - `ui/` - Shadcn UI components
  - `ui-customs/` - Custom UI components
- `src/core/` - Core functionality
  - `constants/` - Application constants
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `providers/` - Context providers
- `src/store/` - Global state management
- `src/features/` - Feature-based modules
- `src/styles/` - Global styles
- `public/` - Static assets
- `.vscode/` - Editor configuration
- `.husky/` - Git hooks

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `postcss.config.mjs` - PostCSS configuration
- `.oxlintrc.json` - Oxlint configuration
- `.prettierrc` - Prettier configuration
- `components.json` - Shadcn UI configuration
- `env.ts` - Environment variables validation
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

## Static Export

This template supports static exports. The default configuration in `next.config.ts` includes:

```typescript
{
  output: 'export', // To enable a static export
  trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
}
```

To serve the static export locally:

```bash
yarn build
yarn start:static
```

## VSCode Integration

This template includes recommended extensions and optimized settings for VSCode.
