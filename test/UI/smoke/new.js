const superCal = require('../pageObjects/superCalculator.js');
var supercal = new superCal();

describe('my flashy page Objects test', function () {
    it('should add 2 numbers', function () {

        supercal.get();
        supercal.setFirstNumber(10);
        supercal.setSecondNumber(20);
        supercal.clickGoButton();
   
    });
});