//import { browser } from "protractor";


describe('Protractor Demo App test 2', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var resultRows = element.all(by.repeater('result in memory'));

    function add(a,b){
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

   /*beforeEach(function(){
    
   }); */

   it ('page should have a title',function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    expect(browser.getTitle()).toEqual('Super Calculator');
   });

   it('should add one and two', function() {
    add(1,2);
    expect(latestResult.getText()).toEqual('3');
  });

    it('should count rows of result',function () {
      add(2,3);
      expect(resultRows.count()).toEqual(2);  
      add(5,6);
      expect(resultRows.count()).toEqual(3);
    });
  
    
  });