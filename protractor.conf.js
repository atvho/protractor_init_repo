const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    directConnect: true, 
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://angularjs.org',
    specs: ['./specs/tester_spec.js'],
    capabilities: {
      browserName: 'chrome',
    },
    jasmineNodeOpts: {
      print: function() {}
    },
    onPrepare: function () {
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));
      beforeEach(function () {
        // browser.ignoreSynchronization = true;
        // browser.manage().window().maximize();
        browser.get('/')
      });
      afterEach(function () {
        browser.manage().deleteAllCookies();
        browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
        function (err) {
          throw err
        });
      });
    }
  };