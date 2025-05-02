# Next.js 15 Tailwind Template

This is a template for Next.js 15 with Tailwind CSS.

### Package Manager: `yarn`

- install dependencies: `yarn` or `yarn install`
- add new dependencies: `yarn add <package-name>`
- remove dependencies: `yarn remove <package-name>`
- run scripts from package.json: `yarn <script-name>` or `yarn run <script-name>`
- clean node_modules: `yarn clean`

### Scripts

- `dev`: run development server
- `build`: build production bundle
- `start`: start production server

### Linting and Formatting

- `lint`: run ESLint to check for code issues
- `lint:fix`: run ESLint with automatic fixes
- `pretty-quick`: run Prettier to format code changes
- `pretty-quick --staged`: run Prettier to format staged code changes

### Git Hooks (husky)

`pre-commit:`

```bash
# format staged code changes, this ensure code quality
yarn pretty-quick --staged

# build production bundle, this ensure the code is ready for production
yarn build
```
