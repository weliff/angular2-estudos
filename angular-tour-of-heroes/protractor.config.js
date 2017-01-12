exports.config = {

  capabitilies: {
     'browserName': 'chrome',
     'chromeOptions': {
       'args': ['show-fps-counter=true']
     }
  },

  allScriptsTimeout: 110000,

  getPageTimeout: 100000,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  baseUrl: 'http://localhost:3000',

  useAllAngular2AppRoots: true,

  keepAlive: false,

  cucumberOpts: {
    require: ['test/features/step_definitions/*step.js',
    'test/features/support/env'],
    tags: false,
    format: 'pretty',
    profile: false
  },

  specs: [
    'test/features/*.feature'
  ],

};