// import { browser } from "protractor";
var pathR = require('../../utilities/PathReader.js');
this.pathrd = new pathR();
class superCalculator {
    
    constructor() {
        
        this.firstNumber = element(pathrd.getByElement('firstInput'));
        this.secondNumber = element(pathrd.getByElement('secondNumber'));
        this.goButton = element(pathrd.getByElement('gobutton'));
        this.latestResult = element(by.binding('latest'));
        this.resultRows = element.all(by.repeater('result in memory'));
    }
    get(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    }
    setFirstNumber(integerNumber) {
        this.firstNumber.sendKeys(integerNumber);
    }
    setSecondNumber(integerNumber) {
        this.secondNumber.sendKeys(integerNumber);
    }
    clickGoButton() {
        this.goButton.click();
    }

}


module.exports = superCalculator;
