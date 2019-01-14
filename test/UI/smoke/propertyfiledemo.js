// var PropertiesReader = require('properties-reader'); 
// var properties = PropertiesReader('test/UI/propertyFiles/paths.properties');
// var first=properties.get('firstInput');
// console.log("first input path "+first);

var pathR = require('../../utilities/PathReader.js');
var pathrd = new pathR();

describe('pathreader utility',function(){
    it('should fetch',function(){
      //  console.log("path read is : "+ pathrd.getLocator('secondNumber'));
      pathrd.getByElement('resultRows');
     
    });
   
});