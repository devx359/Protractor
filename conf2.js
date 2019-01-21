let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    //no need to start web driver server if directConnect=true
   // directConnect: true,
    framework: 'jasmine2',
    //  seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['test/UI/regression/spec2.js','test/UI/regression/spec1.js'],
    suites: {
        //regression: ['test/UI/regression/spec2.js', 'test/UI/regression/spec1.js'],
         smoke: ['test/UI/smoke/spec1.js'],
        //flashy: ['test/UI/smoke/propertyfiledemo.js']
        //flashy: ['test/UI/smoke/new.js']
       // flashy: ['test/UI/smoke/excelDemo.js']

    },
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

        
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'reports'
        }));

        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });

    }
};
