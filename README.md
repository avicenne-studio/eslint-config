# @avicenne-studio/eslint-config

This library contains the eslint configuration used by Avicenne-Studio.

## Installing the library locally

```bash
npm install -D @avicenne-studio/eslint-config
```

## Using the library

To use the library, you'll need to add the following to your `.eslintrc.js` file:

```js
module.exports = {
  extends: ["@avicenne-studio"],
};
```

## Publishing the library

In order to publish the library, update manually the version in the `package.json` file and run the following command:

```bash
   git commit -m "update package version"
   git tag v[your-package-version]
   git push origin main v[your-package-version]
```

A github action will automatically publish the package to the npm registry.
