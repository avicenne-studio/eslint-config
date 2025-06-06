# @avicenne-studio/eslint-config

This library contains the [ESLint](https://eslint.org) configuration used by [Avicenne Studio](https://avicenne.studio).

## Installing the library

```bash
npm install --save-dev @avicenne-studio/eslint-config
```

## Using the library

To use the library, you'll need to add the following to your `.eslint.config.js` file:

```js
import { nextJsConfig } from "@avicenne-studio/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
export default nextJsConfig;
```

## Publishing updates

For Avicenne Studio employees, in order to publish an update of the library, you'll need to:

- Update the version field in the `package.json` file;
- Stage and commit all changes;
- Tag the new commit with the new version number; and
- Push all changes to the GitHub repository.

This can be done using the following commands:

```bash
npm version patch
git push origin main --tags
```

A GitHub Actions workflow will then automatically publish the package to the NPM registry.
