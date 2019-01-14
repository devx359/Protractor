
exports.config = {
    //no need to start web driver server if directConnect=true
    directConnect: true,
    framework: 'jasmine',
    //  seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['test/UI/regression/spec2.js','test/UI/regression/spec1.js'],
    suites: {
        // regression: ['test/UI/regression/spec2.js','test/UI/regression/spec1.js'],
        // smoke: ['test/UI/smoke/spec1.js'],
       // flashy: ['test/UI/smoke/propertyfiledemo.js']
       flashy: ['test/UI/smoke/new.js']
       
    },
    capabilities: {
        browserName: 'chrome'
    },
   
    onPrepare: function () {
        browser.manage().window().maximize();
       
    }
};
