# Description

TypeScript CLI project used to test types of [@moltin/sdk](https://github.com/moltin/js-sdk) package.

## Setup

Go to you local version of `@moltin/sdk` and run:

``` bash
cd js-sdk
yarn link
```

Then cd back into this folder and run:

``` bash
cd test-js-sdk
yarn install
yarn link '@moltin/sdk'
```

This will link the local version of your `@moltin/sdk` package so any changes made to it can be tested with this project.

Use `yarn start` and `yarn watch` to run/watch the script.
