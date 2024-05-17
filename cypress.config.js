module.exports = {
  chromeWebSecurity: false,
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      url: 'https://www.saucedemo.com/',
      qauser: 'standard_user',
      qapassword: 'secret_sauce',
    },
  },
};
