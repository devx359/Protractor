var pathR = require('../../utilities/PathReader.js');

class superCalculator {
    
    constructor() {
        this.pathrd = new pathR();
        this.firstNumber = element(this.pathrd.getByElement('firstInput'));
        this.secondNumber = element(this.pathrd.getByElement('secondNumber'));
        this.goButton = element(this.pathrd.getByElement('goButton'));
        this.latestResult = element(this.pathrd.getByElement('latestResult'));
        this.resultRows = element.all(this.pathrd.getByElement('resultRows'));
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

    getlatestResult() {    
        let res= this.latestResult.getText();
        console.log("res: "+res);
        return res;
    }

}


 module.exports = superCalculator;
