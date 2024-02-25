# readme-writter

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Repository](#repository)

## Installation

```bash
npm install -g readme-writter
```

## Usage

```bash
readme-writter
```

## Scripts

- **build**: `tsc`
  Compiles the TypeScript code using TypeScript Compiler.

- **clean**: `rm -rf dist`
  Removes the "dist" directory to clean up generated files.

- **format**: `prettier --write .`
  Formats the code using Prettier.

- **lint**: `eslint .`
  Runs ESLint for static code analysis.

- **dev**: `node --loader ts-node/esm index.ts`
  Runs the application in development mode using ts-node.

- **publish**: `npm publish`
  Publishes the package to the npm registry.

- **prepublish**: `npm run clean && npm run build`
  Executes necessary tasks before publishing, such as cleaning and building the code.

### Dependencias y Dev Dependencias

## Dependencies

```
- **inquirer**: 9.2.15
```

## Dev Dependencies

- **@types/inquirer**: 9.0.7
- **@types/node**: 20.11.20
- **@types/typescript**: 2.0.0
- **@typescript-eslint/eslint-plugin**: 6.21.0
- **eslint**: 8.57.0
- **eslint-config-standard-with-typescript**: 43.0.1
- **eslint-plugin-import**: 2.29.1
- **eslint-plugin-n**: 16.6.2
- **eslint-plugin-promise**: 6.1.1
- **prettier**: 3.2.5
- **ts-node**: 10.9.2
- **typescript**: 5.3.3

## Repository

[GitHub Repository](https://github.com/Lucho375/readme-generator.git)
