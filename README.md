# @avicenne-studio/eslint-config

This library contains the eslint configuration used by Avicenne.

## Installing the library

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

The publication of the library is done automatically using github actions.
