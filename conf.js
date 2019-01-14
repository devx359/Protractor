var Jasmine2HtmlReporter = require('D:/protDemo/node_modules/protractor-jasmine2-html-reporter');
//console.log("Jasmine2HtmlReporter is of type: " + typeof Jasmine2HtmlReporter);
exports.config = {
    //no need to start web driver server if directConnect=true
    directConnect: true,
    framework: 'jasmine',
    //  seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['test/UI/regression/spec2.js','test/UI/regression/spec1.js'],
    suites: {
        // regression: ['test/UI/regression/spec2.js','test/UI/regression/spec1.js'],
        // smoke: ['test/UI/smoke/spec1.js'],
        flashy: ['test/UI/smoke/new.js']
    },
    capabilities: {
        browserName: 'chrome'
    },
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 400000,
        isVerbose: true,
        includeStackTrace: true
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        //add jasmine html reporter and set report save path
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports',
                takeScreenshots: true,
                //takeScreenshotsOnlyOnFailures:true,
                consolidate: true
            })
        );
    }
};
