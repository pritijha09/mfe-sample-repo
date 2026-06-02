const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  remotes: {
    admin: 'http://localhost:4202/remoteEntry.json',
    products: 'http://localhost:4201/remoteEntry.json',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});