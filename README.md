# Quasar App (storybook-quasar)

A Quasar Framework example app to demonstrate Storybook integration.

[This Dev.to article](https://dev.to/yemolai/using-storybook-with-quasar-3090) explains how to integrate it.

## Install the dependencies (user yarn and don't ignore the lock, that's for safety hehe)
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Start the Storybook
```bash
yarn storybook
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
To setup more webpack configuration edit the `webpack-config.js` file, to edit aliases, make the
needed changes on the `aliases.js` file within the `aliases` object writing the path as an array.

To edit more Quasar configs see [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
