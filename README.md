# @avicenne-studio/eslint-config

This library contains the eslint configuration used by Avicenne.

## Installing the library locally

Since the organization is private, you'll need to be a member of the organization to install the library.

You'll need to generate a personal access token from [github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

1. Install the library using npm cli:

   ```bash
   npm login --registry=https://npm.pkg.github.com --scope=@avicenne-studio

   > Username: Github Username
   > Password: Github Personal Access Token
   ```

You can now install the library using npm:

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
   git push origin v[your-package-version]
   git push origin main
```

A github action will automatically publish the package to the npm registry.

## Installing the library within a github action

If the repository A is trying to install this package within a github action, go to the [package settings](https://github.com/orgs/avicenne-studio/packages/npm/eslint-config/settings), and add the repository to the list of repositories that can install the package.

Next go to the repository A, and add the following to install dependencies step:

```yaml
 - name: Install dependencies
     run: npm ci
     env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
