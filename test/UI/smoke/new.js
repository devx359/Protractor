const superCal = require('../pageObjects/superCalculator.js');
var supercal = new superCal();

describe('my flashy page Objects test', function () {
    it('should add 2 numbers', function () {

        supercal.get();
        supercal.setFirstNumber(10);
        supercal.setSecondNumber(20);
        supercal.clickGoButton();
        browser.sleep(5000);
        expect(supercal.getlatestResult()).toEqual('30');
        
        
   
    });
    it('should add 5 and 4 ', function () {

        supercal.get();
        supercal.setFirstNumber(5);
        supercal.setSecondNumber(3);
        supercal.clickGoButton();
        browser.sleep(2000);
        expect(supercal.getlatestResult()).toEqual('9');  
    });
});